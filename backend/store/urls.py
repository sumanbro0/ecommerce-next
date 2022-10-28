from argparse import Namespace
from django.urls import path, include
from . import views
app_name = "store"


urlpatterns = [
    path('api/', views.ProductListView.as_view(), name="store"),
    path('api/comments/', views.CommentView.as_view(), name="comments"),
    path('api/demo', views.DemoView.as_view(), name="demo"),
    path('api/category/', views.CategoryListView.as_view(), name="categories"),
    path('api/parent/', views.ParentListView.as_view(), name="parent"),
    path('api/<slug:slug>/', views.Products.as_view(), name="store"),
    path('api/category/<slug:slug>/',
         views.CategoryItemView.as_view(), name="category_item"),
]
