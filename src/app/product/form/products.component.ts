import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { empty, Subscription } from 'rxjs';
import { ProductsService } from '../../common/services/product/products.service';
import { Product } from '../models/products-model';

@Component({
  selector: 'app.products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class productsCadastroComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  pageTitle: string = 'Adicionar Produtos';
  formMode: string = '';
  productForm!: FormGroup;
  product!: Product;

  validationMessages: { [Key: string]: { [key: string]: string }};
  private subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {
    this.validationMessages = {};
  }

  ngOnInit() {
    this.formMode = 'new';
    this.productForm = this.fb.group({
      nome: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
        ],
      ],
      descricao: ['', [Validators.min(3), Validators.maxLength(500)]],
      precoCusto: ['', [Validators.required]],
    });

    this.subscription = this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      const name = params.get('nome');

      if (id == null || id == '') {
        const product: Product = {
          id: '',
          nome: '',
          descricao: '',
          precoCusto:  0.00,
          margemLucro: 1,
          quantidade: 0,
          unidade: '',
          ativo: true,
          dataValidade: '',
          ultimaVenda: '',
          status: true 
        };
        this.showProduct(product);
      } else {
        this.getProduct(id);
      }
    });
  }

  ngOnDestroy(): void {}

  getProduct(id: string): void {
    this.productsService.getProduct(id).subscribe(
      (product: any) => this.showProduct(product),
      (error: any) => (this.errorMessage = <any>error)
    );
  }

  showProduct(product: Product): void {
    if (this.productForm) {
      this.productForm.reset();
    }

    this.product = product;

    if (this.product.id == '') {
      this.pageTitle = 'Adicionar Produtos';
    } else {
      this.pageTitle = `Alteração do Produto: ${this.product.nome}`;
    }

    this.productForm.patchValue({
      nome: this.product.nome,
      descricao: this.product.descricao,
      ativo: this.product.ativo,
      precoCusto: this.product.precoCusto,
    });
  }

  toSave(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const p = { ...this.product, ...this.productForm.value };
        if (p.id === '') {
          this.productsService
            .createProduct(p) //POST
            .then(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
            );
        } else {
          this.productsService
            .updateProduct(p) //PUT
            .then(
              () => this.onSaveComplete(),
              (error: any) => (this.errorMessage = <any>error)
            );
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Por favor corrija os erros de validação ';
    }
  }

  onSaveComplete(): void {
    this.productForm.reset();
    this.router.navigate(['/product-registration']);
  }
}