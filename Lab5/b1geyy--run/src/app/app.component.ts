import { Component } from '@angular/core';
import { categories } from './categories';
import { change } from './product-list/product-list.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  categories = categories;
  show = false;
  showCat(){
    this.show = !this.show;
  }
  showCategory(category:string){
    // window.open(category);
    change(category);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/