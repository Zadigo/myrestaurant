from django.urls import re_path
from inventory import views

app_name = 'inventory'

urlpatterns = [
    re_path(r'^products', views.available_products),
    re_path(r'^menus', views.available_menus),
    re_path(r'^drinks', views.available_drinks)
]
