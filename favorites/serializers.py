from rest_framework import fields
from rest_framework.serializers import ModelSerializer, Serializer

from favorites.models import Favorite


class MenuSerializer(Serializer):
    id = fields.IntegerField()
    name = fields.CharField()


class ProductSerializer(Serializer):
    id = fields.IntegerField()
    name = fields.CharField()
    

class FavoriteSerialier(ModelSerializer):
    menu = MenuSerializer()
    product = ProductSerializer()
    
    class Meta:
        model = Favorite
        fields = ['id', 'menu', 'product', 'created_on']
