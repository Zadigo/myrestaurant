from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from favorites.models import Favorite
from rest_framework.response import Response
from favorites.serializers import FavoriteSerialier

@api_view(['get'])
@permission_classes([IsAuthenticated])
def favorites_view(request):
    favorites = Favorite.objects.filter(user=request.user)
    serializer = FavoriteSerialier(instance=favorites)
    return Response(data=serializer.data)


@api_view(['post'])
@permission_classes([IsAuthenticated])
def create_favorite_view(request):
    serializer = FavoriteSerialier(data=request.data)
    serializer.is_valid(raise_exception=True)
    return Response(data=serializer.data)
