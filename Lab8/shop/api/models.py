from django.db import models

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=255)
    CategoryId = models.IntegerField()
    price = models.FloatField()
    description = models.TextField(max_length=500)
    count = models.IntegerField()
    is_active = models.BooleanField()

    def to_json(self):
        return {
            'Name': self.name,
            'Price': self.price,
            'Description': self.description,
            'Count': self.count,
            'Is Active?': self.is_active
        }

class Category(models.Model):
    name = models.CharField(max_length=255)

    def to_json(self):
        return {
            'Name': self.name,
        }