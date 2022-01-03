import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { StoreService } from './../store.service';
import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private http: HttpClient,
    private store: StoreService
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })
  }

  addProductToCart(product: Product) {
    this.store.addProduct(product);
  }

}
