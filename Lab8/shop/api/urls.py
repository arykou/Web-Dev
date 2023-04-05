from django.urls import path, re_path
from api import views as v

urlpatterns = [
    path('products/', v.allProducts),
    re_path(r'^products/(\d{1,2})/$', v.getProduct),
    path('categories/', v.allCategories),
    re_path(r'^categories/(\d{1,2})/$', v.getCategory),
    re_path(r'^categories/(\d{1,2})/products/', v.productByCategory)
]