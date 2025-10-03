from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path
from django.urls.conf import include
from restaurant import views
from drf_spectacular import views as spectacular_views
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path(
        '__debug__/',
        include('debug_toolbar.urls')
    ),
    path(
        'v1/jwt/create/',
        jwt_views.TokenObtainPairView.as_view(),
        name='token_obtain_pair'
    ),
    path(
        'v1/jwt/refresh/',
        jwt_views.TokenRefreshView.as_view(),
        name='token_refresh'
    ),
    path(
        'v1/schema/',
        spectacular_views.SpectacularAPIView.as_view(),
        name='schema'
    ),
    path(
        'v1/docs/',
        spectacular_views.SpectacularSwaggerView.as_view(),
        name='swagger-ui'
    ),
    path(
        'v1/redoc/',
        spectacular_views.SpectacularRedocView.as_view(),
        name='redoc'
    ),
    path(
        'v1/favorites/',
        include('favorites.urls')
    ),
    path(
        'v1/inventory/',
        include('inventory.urls')
    ),
    path(
        'v1/pickups/',
        include('pickups.urls')
    ),
    # path('', views.index, name='home'),
    path(
        'admin/',
        admin.site.urls
    )
]

if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=settings.STATIC_ROOT
    )
    urlpatterns += static(
        settings.MEDIA_URL,
        document_root=settings.MEDIA_ROOT
    )
