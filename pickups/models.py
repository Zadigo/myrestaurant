
from django.db import models
from uuid import uuid4

from django.db.models.constraints import UniqueConstraint
from django.db.models.indexes import Index
from django.utils import timezone
from imagekit.models import ProcessedImageField
from imagekit.processors import ResizeToFill
from pickups.utils import upload_to

class AbstractInventory(models.Model):
    name = models.CharField(max_length=100)
    image = ProcessedImageField(
        processors=[ResizeToFill(400, 400)],
        upload_to=upload_to,
        format='JPEG',
        options={'quality': 80},
        help_text='Image should be higher or equal to 400x400px'
    )
    price_pre_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    price_post_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    active = models.BooleanField(default=False)
    created_on = models.DateField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class Product(AbstractInventory):
    class Meta:
        constraints = [
            UniqueConstraint(fields=['name'], name='unique_product')
        ]
        indexes = [
            Index(fields=['name'])
        ]


class Drink(AbstractInventory):
    flavor = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        constraints = [
            UniqueConstraint(fields=['name', 'flavor'], name='unique_drink_to_flavor')
        ]
        indexes = [
            Index(fields=['name'])
        ]


class Menu(AbstractInventory):
    todays_specials = models.BooleanField(default=False)
    products = models.ManyToManyField(Product)
    drink = models.ForeignKey(
        Drink,
        on_delete=models.SET_NULL,
        blank=True,
        null=True
    )
    
    class Meta:
        constraints = [
            UniqueConstraint(fields=['name'], name='unique_menu_name')
        ]
        indexes = [
            Index(fields=['name'])
        ]


class Pickup(models.Model):
    reference = models.UUIDField(default=uuid4, unique=True)
    date = models.DateTimeField(default=timezone.now)
    
    firstname = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    telephone = models.CharField(max_length=50, validators=[])

    menus = models.ManyToManyField(Menu)
    drinks = models.ManyToManyField(Drink, blank=True)
    
    completed = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            Index(fields=['firstname', 'lastname'])
        ]

    def __str__(self):
        return str(self.reference)
