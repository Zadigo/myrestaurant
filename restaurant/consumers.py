from channels.db import database_sync_to_async
from channels.generic.websocket import AsyncJsonWebsocketConsumer
from django.shortcuts import get_object_or_404
from pickups.models import Pickup


class CustomerOrdersConsumer(AsyncJsonWebsocketConsumer):
    """Connection for checking customer orders"""
    async def connect(self):    
        await self.accept()
        await self.channel_layer.group_add('customer_orders', self.channel_name)

    async def disconnect(self, code):
        await self.channel_layer.group_discard('customer_orders', self.channel_name)
        await self.close()

    async def receive_json(self, content, **kwargs):
        await self.channel_layer.group_send('customer_orders', content)


class CustomerOrderConsumer(AsyncJsonWebsocketConsumer):
    """Connection used by the customer to check
    his specific order"""
    @database_sync_to_async
    def get_customer_order(self, reference):
        pickup = None
        try:
            pickup = Pickup.objects.get(reference=reference)
        except:
            return pickup
        
    async def connect(self):
        self.accept()
        # reference = self.scope['url_route']['kwargs']['reference']
        # pickup = await self.get_customer_order(reference=reference)
        
        # if pickup is None:
        #     await self.send_json({'method': 'failed_authentication'})
        #     await self.close()
        # else:
        #     await self.accept()
        #     await self.channel_layer.group_add('customer_orders', self.channel_name)
    
    async def disconnect(self, code):
        await self.channel_layer.group_discard('customer_orders', self.channel_name)
        await self.close()
    
    async def receive_json(self, content, **kwargs):
        await self.channel_layer.group_send('customer_orders', content)
