from ast import arg
from email.mime import image
from email.policy import default
from operator import truediv
from pyexpat import model
from re import T
from tabnanny import verbose
from unicodedata import category
from django.db import models
from django.urls import reverse
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey
from django.contrib.auth.models import User

# Create your models here.


class Category(MPTTModel):
    '''category table'''
    name = models.CharField(
        verbose_name=_("category name"),
        help_text=_("required and name"),
        max_length=225,
        unique=True,
    )

    slug = models.SlugField(verbose_name=_(
        "category safe URL"), max_length=255, unique=True)
    parent = TreeForeignKey('self', on_delete=models.CASCADE,
                            null=True, blank=True, related_name='children')
    is_active = models.BooleanField(default=True)

    class MPTTMeta:
        order_insertion_by = ['name']

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def get_absolute_url(self):
        return reverse("store:category_list", args=[self.slug])

    def __str__(self):
        return self.name


class ProductType(models.Model):
    id = models.AutoField(primary_key=True, unique=True)
    name = models.CharField(verbose_name=_("Brand Name"), help_text=_(
        "Required"), max_length=225, unique=True,)
    size = models.CharField(verbose_name=_("Size of product"), help_text=_(
        "Required"), max_length=225, default=True)
    product_desc = models.TextField(verbose_name=_("Product description"), help_text=_(
        "Required"), blank=True, null=True)
    fragnance = models.CharField(verbose_name=_("fragnance"), help_text=_(
        "fragnance of item"), blank=True, max_length=255, default="")

    is_active = models.BooleanField(default=True)

    class Meta:
        verbose_name = _("Product Type")
        verbose_name_plural = _("Product Types")

    def __str__(self):
        return self.name


class ProductSpecification(models.Model):
    '''
    features for product types
    '''
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)
    name = models.CharField(verbose_name=_("Product Name"), help_text=_(
        "Required"), max_length=225)

    class Meta:
        verbose_name = _("Product Specification")
        verbose_name_plural = _("Product Specifications")

    def __str__(self):
        return self.name


class Product(models.Model):
    '''product items'''
    product_type = models.ForeignKey(ProductType, on_delete=models.RESTRICT)

    category = models.ForeignKey(Category, on_delete=models.RESTRICT)

    title = models.CharField(verbose_name=_("title"),
                             help_text=_("Required"),
                             max_length=255,
                             )

    description = models.TextField(verbose_name=_(
        "description"), help_text=_("Not required"), blank=True)

    slug = models.SlugField(max_length=255)

    regular_price = models.DecimalField(verbose_name=_("Regular Price"), help_text=_("Maximum 999.99"), error_messages={
        "name": {
            "max_length": _("The price must be between 0 to 999.99")
        }
    }, max_digits=5, decimal_places=2)
    discount = models.DecimalField(verbose_name=_("Discount Price"), help_text=_("Maximum 999.99"), error_messages={
        "name": {
            "max_length": _("The price must be between 0 to 999.99")
        }
    }, max_digits=5, decimal_places=2)
    is_active = models.BooleanField(verbose_name=_(
        "Product Visuability"), help_text=_("Change Product Visuability"), default=True)
    created_at = models.DateTimeField(
        _("Created at"), auto_now_add=True, editable=False)
    updated_at = models.DateTimeField(_('Updated at'), auto_now=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = _("Product")
        verbose_name_plural = _("Products")

    def get_absolute_url(self):
        return reverse("store:product_detail", args=[self.slug])

    def __str__(self):
        return self.title


class ProductSpecificationValue(models.Model):
    '''products individual specification'''
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    specification = models.ForeignKey(
        ProductSpecification, on_delete=models.RESTRICT)
    value = models.CharField(verbose_name=_('value'), help_text=_(
        "product specification value maximum of 255 words"), max_length=255)

    class Meta:
        verbose_name = _("Product specification values")
        verbose_name_plural = _("Products specification values")


class ProductImage(models.Model):
    '''product image table'''
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='product_image')
    image = models.ImageField(
        verbose_name=_('image'),
        help_text=_('upload a product of image'),
        upload_to="images/",
        default="images/default.png",
    )
    alt_text = models.CharField(
        verbose_name=_("Alternative text"),
        help_text=_("please Enter alternative text"),
        max_length=255,
        null=True,
        blank=True,
    )
    is_feature = models.BooleanField(default=True)

    class Meta:
        verbose_name = _("Product Image")
        verbose_name_plural = _("Products Images")


class CommentLists(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, null=True)

    def __str__(self):
        return str(self.user.username)


class Comments(models.Model):
    commentlists = models.ForeignKey(
        CommentLists, on_delete=models.CASCADE, default='')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    comment = models.TextField(default='', null=True)
    objects = models.Manager()

    def __str__(self):
        return str(self.product.title)
