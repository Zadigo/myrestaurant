from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.urls.conf import include

from restaurant import views

urlpatterns = [
    path('api/v1/favorites/', include('favorites.urls')),
    path('api/v1/inventory/', include('inventory.urls')),
    path('api/v1/pickups/', include('pickups.urls')),
    path('', views.index, name='home'),
    path('admin/', admin.site.urls)
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
