
from rest_framework import generics
from .models import Category, CommentLists, Comments, Product
from .serializers import CategorySerializer, CommentListSerializer, CommentsSerializer,  ProductSerializer
from . import models
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


# Create your views here.
class DemoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({'info': 'congratulations you are authenticated'})


class ProductListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class Products(generics.RetrieveAPIView):
    lookup_field = "slug"
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class CategoryItemView(generics.ListAPIView):
    serializer_class = ProductSerializer

    def get_queryset(self):
        return models.Product.objects.filter(category__in=Category.objects.get(
            slug=self.kwargs["slug"]).get_descendants(include_self=True))


class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.filter(level=1)
    serializer_class = CategorySerializer


class ParentListView(generics.ListAPIView):
    queryset = Category.objects.filter(level=0)
    serializer_class = CategorySerializer


# class CommentView(APIView):
class CommentView(APIView):

    def get(self, request):
        queryset = Comments.objects.all()
        serialezer = CommentsSerializer(queryset, many=True)
        return Response({"data": serialezer.data})

    def post(self, request):
        try:
            user = request.user
            data = request.data
            commentlist, _ = CommentLists.objects.get_or_create(user=user)
            comment = data.get('comment')
            product = Product.objects.get(id=data.get('product'))
            if comment:
                comments = Comments(
                    commentlists=commentlist, product=product, comment=comment)
                comments.save()
                return Response({'comment': comment, 'user': user.username})
        except:
            return Response({"error": "please login"})

    def delete(self, request):
        try:
            user = request.user
            data = request.data
            if user.username:
                comment = Comments.objects.get(id=data.get('id'))
                comment.delete()
                return Response({"res": "res"})
            return Response({"error": "please login"})
        except:
            return Response({"error": "please login"})
