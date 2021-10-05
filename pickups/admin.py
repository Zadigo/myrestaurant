from django.contrib import admin

from pickups.models import Menu, Pickup


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']


@admin.register(Pickup)
class PickupAdmin(admin.ModelAdmin):
    list_display = ['firstname', 'lastname', 'date', 'completed']
    search_fields = ['menu__name']
    date_hierarchy = 'created_on'
