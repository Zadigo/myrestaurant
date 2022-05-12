from rest_framework.serializers import Serializer
from rest_framework import fields
from pickups.serializers import DrinkSerializer, MenuSerializer
from inventory.models import Drink, Menu, Product
from django.shortcuts import get_list_or_404
from pickups.models import Pickup


class PickupSerializer(Serializer):
    reference = fields.UUIDField(read_only=True)
    menus = MenuSerializer(many=True)
    drinks = DrinkSerializer(many=True)
    firstname = fields.CharField()
    lastname = fields.CharField()


class ValidatePickupSerializer(Serializer):
    menus = fields.ListField(required=True)

    firstname = fields.CharField(required=True)
    lastname = fields.CharField(required=True)
    telephone = fields.CharField(required=True)

    # Optional products and drinks that the
    # user can add to the pickup
    products = fields.ListField()
    drinks = fields.ListField()

    def create(self, validated_data):
        attrs = {
            'firstname': validated_data['firstname'],
            'lastname': validated_data['lastname'],
            'telephone': validated_data['telephone']
        }
        selected_menus = get_list_or_404(
            Menu, active=True, id__in=validated_data['menus'])

        pickup = Pickup.objects.create(**attrs)
        pickup.menus.set(selected_menus)

        # extra_products = validated_data.get('products', [])
        # if extra_products:
        #     extra_products = get_list_or_404(Product, active=True, id__in=extra_products)
        #     pickup

        extra_drinks = validated_data.get('drinks', [])
        if extra_drinks:
            extra_drinks = get_list_or_404(
                Drink, active=True, id__in=extra_drinks)
            pickup.drinks.set(extra_drinks)

        pickup.save()
        return pickup
