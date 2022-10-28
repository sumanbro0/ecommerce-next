from rest_framework import serializers
from .models import *
from store.serializers import *


class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = '__all__'


class CartItemsSerializer(serializers.ModelSerializer):
    cart = CartSerializer()
    product = ProductSerializer()

    class Meta:
        model = CartItems
        fields = '__all__'


class WishListSerializer(serializers.ModelSerializer):
    class Meta:
        model = WishList
        fields = '__all__'


class WishItemsSerializer(serializers.ModelSerializer):
    wishlist = WishListSerializer()
    product = ProductSerializer()

    class Meta:
        model = wishItems
        fields = '__all__'
