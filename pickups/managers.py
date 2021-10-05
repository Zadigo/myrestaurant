from django.db.models import QuerySet

class PickupManager(QuerySet):
    def orders_of_the_day(self):
        pass

    def calculate_revenue(self):
        pass

    def group_by_menu(self):
        pass

    def group_by_product(self):
        pass

    def calculate_revenue_for_drinks(self):
        pass

    def group_by_time(self):
        pass

