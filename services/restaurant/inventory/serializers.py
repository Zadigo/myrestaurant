from rest_framework import fields
from rest_framework.serializers import Serializer


class AbstractInventorySerializer(Serializer):
    id = fields.IntegerField(read_only=True)
    name = fields.CharField(read_only=True)
    description = fields.CharField(read_only=True)
    image = fields.URLField()
    slug = fields.SlugField()
    highlight_as_new = fields.BooleanField()
    price_post_tax = fields.DecimalField(5, 2, read_only=True)


class DrinkSerializer(AbstractInventorySerializer):
    """Returns all the drinks available in the restaurant"""
    flavor = fields.CharField()
    is_hot_drink = fields.BooleanField()


class ProductSerializer(AbstractInventorySerializer):
    """Returns all the products available in the restaurant"""
    is_dessert = fields.BooleanField()


class MenuSerializer(AbstractInventorySerializer):
    """Returns the available menus in the restaurant"""
    drinks = DrinkSerializer(many=True)
    products = ProductSerializer(many=True)
