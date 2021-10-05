from rest_framework.routers import DefaultRouter
from django.conf.urls import url
from api.views import inventory, pickups

app_name = 'api'

router = DefaultRouter()


urlpatterns = [
    url(r'^pick-up/new', pickups.create_pickup),
    url(r'^menus', inventory.available_menus),
    url(r'^drinks', inventory.available_drinks),
    url(r'^products', inventory.available_products)
]

urlpatterns.extend(router.urls)
