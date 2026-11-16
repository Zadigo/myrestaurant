from django.contrib import admin
from restaurant.favorites.models import Favorite


@admin.register(Favorite)
class FavoriteAdmin(admin.ModelAdmin):
    list_display = ['created_on']
    date_hiearchy = 'created_on'
