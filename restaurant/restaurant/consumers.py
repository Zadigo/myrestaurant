from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from pickups.models import Pickup


class CustomerOrdersConsumer(AsyncJsonWebsocketConsumer):
    """Connection for checking customer orders"""

    async def connect(self):
        await self.accept()

    async def disconnect(self, code):
        await self.close()

    async def receive_json(self, content, **kwargs):
        pass


class CustomerOrderConsumer(AsyncJsonWebsocketConsumer):
    """Connection used by the customer to check
    his specific order"""

    @database_sync_to_async
    def get_customer_order(self):
        try:
            reference = self.scope['url_route']['kwargs']['reference']
            pickup = Pickup.objects.get(reference=reference)
        except:
            return None
        else:
            return pickup

    async def connect(self):
        pickup = await self.get_customer_order()

        if pickup is None:
            await self.close()
        else:
            await self.accept()

            if pickup.completed:
                self.send_json({'method': 'already_completed'}, close=True)
            else:
                await self.channel_layer.group_add('customer_orders', self.channel_name)

    async def disconnect(self, code):
        await self.channel_layer.group_discard('customer_orders', self.channel_name)
        await self.close()

    async def receive_json(self, content, **kwargs):
        await self.channel_layer.group_send('customer_orders', content)

    async def order_confirmed(self, content, **kwargs):
        print('OK', content, kwargs)
