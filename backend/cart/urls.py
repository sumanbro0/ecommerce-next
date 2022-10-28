
import django
from . import views
from django.urls import path, include


urlpatterns = [
    path('carts/', views.CartView.as_view(), name="cart"),
    path('wishes/', views.WishView.as_view(), name="wishlist"),
]
