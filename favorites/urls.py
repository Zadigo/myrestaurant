from django.urls import re_path

from favorites import views

app_name = 'favorites'

urlpatterns = [
    re_path('^create', views.create_favorite_view),
    re_path('^$', views.favorites_view)
]
