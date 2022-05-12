from django.urls import re_path
from pickups import views

app_name = 'pickups'

urlpatterns = [
    re_path(r'^create', views.create_pickup),
    re_path(r'^pickups', views.get_pickups),
    re_path(r'^exists', views.has_pickups)
]
