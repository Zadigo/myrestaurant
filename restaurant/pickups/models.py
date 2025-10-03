
from uuid import uuid4

from django.db import models
from django.db.models import Sum
from django.db.models.indexes import Index
from django.utils import timezone
from inventory.models import Drink, Menu

from pickups.managers import PickupManager
from pickups.utils import calculate_vat


class Pickup(models.Model):
    reference = models.UUIDField(default=uuid4, unique=True)
    date = models.DateTimeField(default=timezone.now)
    
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    telephone = models.CharField(max_length=50, validators=[])

    menus = models.ManyToManyField(Menu)
    drinks = models.ManyToManyField(Drink, blank=True)
    
    total_pre_tax = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    total_post_tax = models.DecimalField(max_digits=5, decimal_places=2, default=0)
    
    completed = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)
    
    objects = PickupManager.as_manager()

    class Meta:
        indexes = [
            Index(fields=['firstname', 'lastname'])
        ]
        ordering = ['-created_on', 'pk']

    def __str__(self):
        return str(self.reference)
    
    def clean(self):
        # Calculate the total of the order
        # on save so that we do not have to
        # recalculate it everytime
        if self.total_pre_tax == 0:
            selected_menus = self.menus.aggregate(Sum('price_pre_tax'))
            extra_drinks = self.drinks.aggregate(Sum('price_pre_tax'))
            total = sum(
                [
                    selected_menus['price_pre_tax__sum'] or 0,
                    extra_drinks['price_pre_tax__sum'] or 0
                ]
            )
            self.total_pre_tax = total
            self.total_post_tax = calculate_vat(total)
