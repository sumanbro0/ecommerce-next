
import django
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include("store.urls"), name="store_home"),
    path('users/', include('users.urls'), name="store_users"),
    path('cart/', include('cart.urls'), name='cart_home')
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
