import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from './../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private http: HttpClient
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

}
