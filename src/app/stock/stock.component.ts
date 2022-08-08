import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../common/services/product/products.service';
import { Product } from '../product/models/products-model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {
  products: Product[] = [];
  msgError: String = '';

  constructor(private productsService: ProductsService) { }

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
