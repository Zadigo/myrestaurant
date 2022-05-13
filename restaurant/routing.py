from django.urls import re_path
from restaurant.consumers import CustomerOrdersConsumer, CustomerOrderConsumer

urlpatterns = [
    re_path(r'^ws/customer-orders/(?P<reference>[a-zA-Z0-9-]+)', CustomerOrderConsumer.as_asgi()),
    re_path(r'^ws/customer-orders', CustomerOrdersConsumer.as_asgi())
]
