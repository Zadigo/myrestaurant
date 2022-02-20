from django.contrib import admin

from pickups.models import Pickup

@admin.register(Pickup)
class PickupAdmin(admin.ModelAdmin):
    list_display = ['firstname', 'lastname', 'date', 'completed']
    search_fields = ['menu__name']
    date_hierarchy = 'created_on'
    filter_horizontal = ['menus', 'drinks']
    actions = ['completed']

    def completed(self, request, queryset):
        queryset.update(completed=True)
