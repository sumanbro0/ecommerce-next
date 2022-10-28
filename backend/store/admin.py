from django.contrib import admin
from mptt.admin import MPTTModelAdmin
from .models import (
    Category, CommentLists, Comments, Product, ProductImage, ProductSpecification, ProductType, ProductSpecificationValue
)
# Register your models here.
admin.site.register(Category, MPTTModelAdmin)
admin.site.register(Comments)
admin.site.register(CommentLists)


class ProductSpecificationInLine(admin.TabularInline):
    model = ProductSpecification


@admin.register(ProductType)
class ProductTypeAdmin(admin.ModelAdmin):

    inlines = [ProductSpecificationInLine, ]


class ProductImageInline(admin.TabularInline):
    model = ProductImage


class ProductSpecificationValueInLine(admin.TabularInline):
    model = ProductSpecificationValue


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    inlines = [
        ProductImageInline,
        ProductSpecificationValueInLine,
    ]
