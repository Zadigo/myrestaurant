import datetime

import pandas
import pytz
from django.core.cache import cache
from django.db.models import Count, QuerySet, Sum


class PickupManager(QuerySet):
    def all_orders_of_the_day(self):
        """Returns all the orders that were received
        for the current day"""
        return self.filter(created_on__date=datetime.datetime.now().date())
    
    def all_completed_orders_of_the_day(self):
        return self.all_orders_of_the_day().filter(completed=True)
        
    # def all_orders_between_dates(self):
    #     return self.filter(
    #         created_on__range=(
    #             datetime.date(2021, 1, 1),
    #             datetime.datetime.now().date()
    #         )
    #     )

    def revenue_of_the_day(self):
        queryset = self.orders_of_the_day()
        return queryset.aggregate(Sum('total_pre_tax'))
    
    def average_items_per_orders(self):
        """Determine the number of items ordered 
        by customers per order"""
        result = self.annotate(menus_ordered=Count('menus'), drinks_ordered=Count('drinks'))
        return result.values('drinks_ordered', 'menus_ordered')

    def group_by_menu(self):
        pass

    def group_by_product(self):
        pass

    def calculate_revenue_for_drinks(self):
        pass

    def group_by_time(self):
        pass
    
    def queryset_as_dataframe(self):
        cached_orders = cache.get('cached_orders', None)
        if cached_orders is None:
            queryset = self.prefetch_related('menus', 'drinks')
            cache.set('cached_orders', queryset, 1200)
        fields = ['menus__name', 'menus__todays_specials', 
                  'drinks__name', 'total_pre_tax', 'total_post_tax',
                  'completed', 'created_on']
        df = pandas.DataFrame(data=self.values(*fields))
        columns = {
            'menus__name': 'menu',
            'menus__todays_specials': 'special',
            'drinks__name': 'drink'
        }
        df = df.rename(**columns)
        return df
    
    def statistics(self):
        """Create a large amount of statistics at once using Pandas
        and in order to prevent querying the database too often"""
        df = self.queryset_as_dataframe()
        return {
            # TODO:
            'by_menu': df.groupby('menus__name')['menus__name'].count().to_dict(),
            'by_specials': df['menus__todays_specials'].count().to_dict(),
            'by_time': df.groupby('created_on')['menus__name'].count().to_dict()
        }
