import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../common/services/product/products.service';
import { Product } from '../models/products-model';

@Component({
  selector: 'app.product_list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class productsListaComponent implements OnInit {
  products: Product[] = [];
  msgError: String = '';

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => (this.msgError = <any>error)
    );
  }
}
