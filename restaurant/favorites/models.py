from django.contrib.auth import get_user_model
from django.db import models
from django.db.models.constraints import UniqueConstraint
from inventory.models import Menu, Product


class Favorite(models.Model):
    user = models.ForeignKey(
        get_user_model(),
        on_delete=models.CASCADE
    )
    menu = models.ForeignKey(
        Menu,
        models.CASCADE,
        blank=True,
        null=True
    )
    product = models.ForeignKey(
        Product,
        models.CASCADE,
        blank=True,
        null=True
    )
    created_on = models.DateField(auto_now=True)
    
    class Meta:
        constraints = [
            UniqueConstraint(fields=['user', 'menu'], name='unique_favorite_menu_by_user'),
            UniqueConstraint(fields=['user', 'product'], name='unique_favorite_product_by_user')
        ]
    
    def __str__(self):
        return self.user
