from django.contrib import admin

from inventory.models import Menu, Product, Drink

@admin.register(Menu)
class MenuAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']
    filter_horizontal = ['products']
    actions = ['activate']
    
    def activate(self, request, queryset):
        queryset.update(active=True)


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'active']
    actions = ['activate']
    
    def activate(self, request, queryset):
        queryset.update(active=True)


@admin.register(Drink)
class DrinkAdmin(admin.ModelAdmin):
    list_display = ['name', 'flavor', 'price_post_tax', 'active']
    search_fields = ['name', 'flavor']
    list_per_page = 10
    actions = ['activate']
    
    def activate(self, request, queryset):
        queryset.update(active=True)
