from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .models import *
from .serializer import *

# Create your views here.


class CartView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        cart = Cart.objects.filter(user=user, ordered=False).first()
        queryset = CartItems.objects.filter(cart=cart)
        serialezer = CartItemsSerializer(queryset, many=True)
        return Response(serialezer.data)

    def post(self, request):
        data = request.data
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user, ordered=False)
        product = Product.objects.get(id=data.get('product'))
        price = product.regular_price
        quantity = data.get('quantity')
        if quantity > 0:
            cart_items = CartItems(cart=cart, user=user,
                                   product=product, price=price, quantity=quantity)
            cart_items.save()
            cart_item = CartItems.objects.filter(user=user, cart=cart.id)
            total_price = 0
            for items in cart_item:
                total_price += items.price
            cart.total_price = total_price
            cart.save()
            return Response({'success': 'Items added'})

    def put(self, request):
        data = request.data
        user = request.user
        cart, _ = Cart.objects.get_or_create(user=user, ordered=False)
        cart_item = CartItems.objects.get(id=data.get('id'))
        quantity = data.get('quantity')
        if quantity >= 0:
            cart_item.quantity = quantity
            cart_item.save()
            cart_item = CartItems.objects.filter(user=user, cart=cart.id)
            total_price = 0
            for items in cart_item:
                total_price += items.price
            cart.total_price = total_price
            cart.save()
            return Response({'success': 'Items Updated', 'total': cart.total_price})

    def delete(self, request):
        data = request.data
        user = request.user
        cart_item = CartItems.objects.get(id=data.get('id'))
        cart_item.delete()
        cart = Cart.objects.filter(user=user, ordered=False).first()
        queryset = CartItems.objects.filter(cart=cart)
        serializer = CartItemsSerializer(queryset, many=True)
        return Response(serializer.data)


class WishView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        wishlist = WishList.objects.filter(user=user).first()
        queryset = wishItems.objects.filter(wishlist=wishlist)
        serialezer = WishItemsSerializer(queryset, many=True)
        return Response(serialezer.data)

    def post(self, request):
        data = request.data
        user = request.user
        wishlist, _ = WishList.objects.get_or_create(user=user)
        product = Product.objects.get(id=data.get('product'))
        wish = data.get('wish')
        if wish:
            wish_items = wishItems(
                wishlist=wishlist, user=user, product=product, wish=wish)
            wish_items.save()
            return Response({'wish': wish})

    def delete(self, request):
        data = request.data
        user = request.user
        wishitems = wishItems.objects.get(product_id=data.get('id'))
        wishitems.delete()
        wishlist = WishList.objects.filter(user=user).first()
        queryset = wishItems.objects.filter(wishlist=wishlist)
        serializer = WishItemsSerializer(queryset, many=True)
        return Response({"wish": False, "data": serializer.data})
