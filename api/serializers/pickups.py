from rest_framework.serializers import Serializer
from rest_framework import fields

class PickupSerializer(Serializer):
    menus = fields.ListField(required=True)

    firstname = fields.CharField(required=True)
    lastname = fields.CharField(required=True)
    telephone = fields.CharField(required=True)

    # Optional products and drinks that the
    # user can add to the pickup
    products = fields.ListField()
    drinks = fields.ListField()

    def create(self, validated_data):
        return super().create(validated_data)
