from dataclasses import field
from rest_framework import serializers
from .models import Category, CommentLists, Comments, Product, ProductImage, ProductType


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ["image", "alt_text"]


class ParentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["name", "slug"]


class CategorySerializer(serializers.ModelSerializer):
    parent = serializers.CharField(read_only=True, source="parent.name")
    parentSlug = serializers.CharField(read_only=True, source="parent.slug")

    class Meta:
        model = Category
        fields = ["name", "slug", "parent", "parentSlug"]


class ProductTypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductType
        fields = ["name", "product_desc", "size", "fragnance"]


class ProductSerializer(serializers.ModelSerializer):
    product_image = ImageSerializer(many=True, read_only=True)
    category = CategorySerializer()
    product_type = ProductTypeSerializer()

    class Meta:
        model = Product
        fields = ["id", "product_type", "category", "title", "description",
                  "slug", "regular_price", "product_image", "is_active"]


class CommentListSerializer(serializers.ModelSerializer):
    uname = serializers.CharField(
        source="user.username", read_only=True)

    class Meta:
        model = CommentLists
        fields = ['uname', 'user']


class CommentsSerializer(serializers.ModelSerializer):
    commentlists = CommentListSerializer()
    product = ProductSerializer()

    class Meta:
        model = Comments
        fields = '__all__'
