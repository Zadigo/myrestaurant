from api.serializers.menus import DrinkSerializer, MenuSerializer, ProductSerializer
from pickups.models import Drink, Menu, Product
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['get'])
def available_menus(request, **kwargs):
    queryset = Menu.objects.filter(active=True)
    serializer = MenuSerializer(instance=queryset, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['get'])
def available_drinks(request, **kwargs):
    queryset = Drink.objects.filter(active=True)
    serializer = DrinkSerializer(instance=queryset, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['get'])
def available_products(request, **kwargs):
    queryset = Product.objects.filter(active=True)
    serializer = ProductSerializer(instance=queryset, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)
