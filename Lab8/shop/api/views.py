from django.shortcuts import render
from django.http.response import JsonResponse
from api.models import Product, Category

# Create your views here.
def allProducts(request):
    products = Product.objects.all()
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)

def getProduct(request, id):
    product = Product.objects.get(pk=id)
    return JsonResponse(product.to_json(), safe=False)

def allCategories(request):
    categories = Category.objects.all()
    product_json = [p.to_json() for p in categories]
    return JsonResponse(product_json, safe=False)

def getCategory(request, id):
    product = Category.objects.get(pk=id)
    return JsonResponse(product.to_json(), safe=False)

def productByCategory(request, id):
    products = Product.objects.all().filter(CategoryId=id)
    product_json = [p.to_json() for p in products]
    return JsonResponse(product_json, safe=False)
