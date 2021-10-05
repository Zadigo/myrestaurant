
from django.db import models
from uuid import uuid4

from django.db.models.constraints import UniqueConstraint
from django.db.models.indexes import Index
from django.utils import timezone


class Menu(models.Model):
    name = models.CharField(max_length=100)
    price_pre_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    price_post_tax = models.DecimalField(max_digits=5, decimal_places=2, default=1)
    active = models.BooleanField(default=False)
    created_on = models.DateField(auto_now_add=True)

    class Meta:
        constraints = [
            UniqueConstraint(fields=['name'])
        ]
        indexes = [
            Index(fields=['name'])
        ]

    def __str__(self):
        return self.name


class Pickup(models.Model):
    reference = models.UUIDField(default=uuid4, unique=True)
    date = models.DateTimeField(default=timezone.now)
    firstname = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    telephone = models.CharField(max_length=50, validators=[])
    menu = models.ForeignKey(
        Menu,
        on_delete=models.SET_NULL,
        blank=False,
        null=True
    )
    completed = models.BooleanField(default=False)
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [
            Index(fields=['firstname', 'lastname'])
        ]

    def __str__(self):
        return str(self.reference)
