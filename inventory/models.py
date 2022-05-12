from django.db import models
from django.db.models import Index, UniqueConstraint
from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit.processors import ResizeToFill

from inventory.utils import calculate_vat, upload_to


class AbstractInventory(models.Model):
    name = models.CharField(max_length=100)
    
    # original = models.ImageField(upload_to=None)
    # thumbnail = ImageSpecField(source='original', processors=[ResizeToFill(200, 200)], upload_to=upload_to, format='JPEG', options={'quality': 80})
    # banner = ImageSpecField(source='original', processors=[ResizeToFill(1200, 400)], upload_to=upload_to, format='JPEG')
    
    image = ProcessedImageField(
        processors=[ResizeToFill(400, 400)],
        upload_to=upload_to,
        format='JPEG',
        options={'quality': 80},
        help_text='Image should be higher or equal to 400x400px'
    )
    price_pre_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    price_post_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    slug = models.SlugField()
    highlight_as_new = models.BooleanField(default=False)
    active = models.BooleanField(default=False)
    created_on = models.DateField(auto_now_add=True)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name
    
    def clean(self):
        self.price_post_tax = calculate_vat(self.price_pre_tax)
        
        # Create slug
        self.slug = str(self.name).replace(' ', '-').lower()


class Product(AbstractInventory):
    is_dessert = models.BooleanField(default=False)
    
    class Meta:
        constraints = [
            UniqueConstraint(fields=['name'], name='unique_product')
        ]
        indexes = [
            Index(fields=['name'])
        ]


class Drink(AbstractInventory):
    flavor = models.CharField(max_length=100, blank=True, null=True)
    is_hot_drink = models.BooleanField(default=False)

    class Meta:
        constraints = [
            UniqueConstraint(
                fields=['name', 'flavor'],
                name='unique_drink_to_flavor'
            )
        ]
        indexes = [
            Index(fields=['name'])
        ]
        ordering = ['name', 'flavor']

    def __str__(self):
        return f'{self.name} - {self.flavor}'
    

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
