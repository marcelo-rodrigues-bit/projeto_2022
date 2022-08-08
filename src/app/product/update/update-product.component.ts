import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/common/services/product/products.service';

@Component({
  selector: 'app-update',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css'],
})
export class UpdateProductComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private router: Router,
    private routeUrl: ActivatedRoute
  ) {}

  updateForm = new FormGroup({
    margemLucro: new FormControl(),
    status: new FormControl(),
  });

  async onSubmit() {
    const id = this.routeUrl.snapshot.params.id;
    const updatedProduct = { ...this.updateForm.value, id: id };
    console.log(updatedProduct);
    await this.productService.updateProduct(updatedProduct);
    this.router.navigate(['product-registration']);
  }

  ngOnInit(): void {}
}
