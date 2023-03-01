import { Component } from '@angular/core';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;
  like(product: Product){
    product.like += 1;
  }
  remove(id: number){
    this.products = this.products.filter(p => p.id != id);
  }
  getProducts(){
    if(category == "All devices"){
      return this.products;
    }
    else return this.products.filter(p => p.category === category);
  }
  share(url:string) {
    window.open("https://t.me/share/url?url=" + url,'_blank');
  }

  onNotify(){
    window.alert('You will be notified when the product goes on sale');
  }
}
function change(cat:string){
  category = cat;
}
var category = "All devices";
export {change}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/