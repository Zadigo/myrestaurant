import os
import json
from functools import cached_property
from typing import Iterator, OrderedDict

@cached_property
def builtin_drink_choices(as_choices=False):
    from django.conf import settings
    from django.db.models import Choices

    with open(os.path.join(settings.MEDIA_ROOT, 'drinks.json'), mode='r') as f:
        data = json.load(f)

    def iterator(drinks):
        for item in drinks:
            for flavor in item['flavors']:
                yield item, flavor

    drinks = list(iterator(data))
    if as_choices:
        return sorted(drinks, key='name')
    
    return OrderedDict(drinks)
