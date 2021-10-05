from rest_framework.serializers import Serializer
from rest_framework import fields

class AbstractInventorySerializer(Serializer):
    name = fields.CharField(read_only=True)
    image = fields.URLField()
    price_post_tax = fields.DecimalField(5, 2, read_only=True)


class DrinkSerializer(AbstractInventorySerializer):
    """Returns all the drinks available in the restaurant"""


class ProductSerializer(AbstractInventorySerializer):
    """Returns all the products available in the restaurant"""


class MenuSerializer(AbstractInventorySerializer):
    """Returns the available menus in the restaurant"""

    drinks = DrinkSerializer()
    products = ProductSerializer(many=True)
