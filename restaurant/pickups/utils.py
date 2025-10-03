import datetime
import time
from collections import OrderedDict
import pytz
from django.conf import settings
import calendar
from django.core.cache import cache
from django.core.exceptions import ImproperlyConfigured


def _current_date():
    return datetime.datetime.now(tz=pytz.timezone(settings.TIME_ZONE))


def get_availabilities():
    availabilities = getattr(settings, 'AVAILABILITIES', [])
    container = OrderedDict()
    for item in availabilities:
        try:
            day, from_time, to_time = item
        except:
            raise ImproperlyConfigured('Availabilities should be a item tuple array')
        else:
            # When using strptime, the date used is
            # 1 January 1900. Use the current year instead
            from_time = ' '.join([str(_current_date().date()), from_time])
            to_time = ' '.join([str(_current_date().date()), to_time])
            
            from_time = datetime.datetime.strptime(from_time, '%Y-%m-%d %H:%M')
            to_time = datetime.datetime.strptime(to_time, '%Y-%m-%d %H:%M')
            
            container.update({day.lower(): [from_time, to_time]})
    return container


def is_available():
    days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
    current_day = days[_current_date().date().weekday()]
    lht, rht = get_availabilities()[current_day]
    print(lht, rht)
    return _current_date() >= lht and _current_date() <= rht


def calculate_vat(value):
    value = float(value)
    return value * 1.20
