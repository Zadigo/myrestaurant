from rest_framework.routers import DefaultRouter
from django.urls import re_path
from api.views import inventory, pickups

app_name = 'api'

router = DefaultRouter()


urlpatterns = [
    re_path(r'^pick-up/all', pickups.get_pickups),
    re_path(r'^pick-up/new', pickups.create_pickup),
    re_path(r'^menus', inventory.available_menus),
    re_path(r'^drinks', inventory.available_drinks),
    re_path(r'^products', inventory.available_products)
]

urlpatterns.extend(router.urls)
