from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer


class PaymentConsumer(AsyncJsonWebsocketConsumer):
    async def connect(self):
        await self.accept()
        await self.channel_layer.group_add('customer_orders', self.channel_name)
    
    async def disconnect(self, code):
        await self.channel_layer.group_discard('customer_orders', self.channel_name)
        await self.close()
    
    async def receive_json(self, content, **kwargs):
        await self.channel_layer.group_send('customer_orders', content)
