import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/common/services/product/products.service';

@Component({
  selector: 'app-registrar-saida',
  templateUrl: './registrar-saida.component.html',
  styleUrls: ['./registrar-saida.component.css'],
})
export class RegistrarSaidaComponent implements OnInit {
  outputProductForm = new FormGroup({
    nome: new FormControl(),
    lote: new FormControl(),
    quantidade: new FormControl(),
    nomeCliente: new FormControl(),
    cnpjCliente: new FormControl(),
    endereçoCliente: new FormControl(),
    telefoneCliente: new FormControl(),
  });

  constructor(
    private productService: ProductsService,
    private router: Router,
    private routeUrl: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  async onSubmit() {
    const id = this.routeUrl.snapshot.params.id;
    if (!id) {
      const response = await this.productService.postOutputProduct(
        this.outputProductForm.value
      );
    } else {
      const updatedOutputProduct = { ...this.outputProductForm.value, id: id };
      await this.productService.updateOutputProduct(updatedOutputProduct);
    }

    this.router.navigate(['saida-produtos']);
  }
}
