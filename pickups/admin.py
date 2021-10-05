from django.contrib import admin

from pickups.models import Drink, Menu, Pickup, Product


@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']
    filter_horizontal = ['products']
    

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']


@admin.register(Drink)
class DrinkAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']


@admin.register(Pickup)
class PickupAdmin(admin.ModelAdmin):
    list_display = ['firstname', 'lastname', 'date', 'completed']
    search_fields = ['menu__name']
    date_hierarchy = 'created_on'
    filter_horizontal = ['menus', 'drinks']
    actions = ['completed']

    def completed(self, request, queryset):
        queryset.update(completed=True)
