import os

from channels.auth import AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.security.websocket import OriginValidator
from django.core.asgi import get_asgi_application

from restaurant import routing

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'restaurant.settings')

# application = get_asgi_application()

application = ProtocolTypeRouter({
    'http': get_asgi_application(),
    'websocket': OriginValidator(
        AuthMiddlewareStack(URLRouter(routing.urlpatterns)),
        ['http://localhost:8000', 'http://127.0.0.1:8000/', '.ngrok.io']
    )
})
