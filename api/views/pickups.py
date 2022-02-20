
from api.serializers.pickups import PickupSerializer, ValidatePickupSerializer
from rest_framework import serializers, status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.shortcuts import get_list_or_404
from pickups.models import Pickup

def get_user_current_orders(request) -> list:
    return request.session.get('current_orders', [])


@api_view(['post'])
def create_pickup(request, **kwargs):
    serializer = ValidatePickupSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    pickup = serializer.save()
    serializer = PickupSerializer(instance=pickup)
    
    # Keep track of all the current orders from the user
    # in his session for quickness
    current_orders = get_user_current_orders(request)
    current_orders.append(str(pickup.reference))
    request.session['current_orders'] = current_orders
    
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['get'])
def has_pickups(request, **kwargs):
    current_orders = get_user_current_orders(request)
    state = False
    if current_orders:
        state = True
    return Response(data={'state': state}, status=status.HTTP_200_OK)


@api_view(['get'])
def get_pickups(request, **kwargs):
    current_orders = get_user_current_orders(request)
    if current_orders:
        orders = get_list_or_404(Pickup, completed=False, reference__in=current_orders)
        serializer = PickupSerializer(instance=orders)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
    return Response(data={}, status=status.HTTP_403_FORBIDDEN)
