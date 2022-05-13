from django.urls import re_path
from restaurant.consumers import PaymentConsumer

urlpatterns = [
    re_path('^ws/customer-orders$', PaymentConsumer.as_asgi())
]
