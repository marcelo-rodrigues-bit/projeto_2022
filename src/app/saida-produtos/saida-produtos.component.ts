import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../common/services/product/products.service';

@Component({
  selector: 'app-saida-produtos',
  templateUrl: './saida-produtos.component.html',
  styleUrls: ['./saida-produtos.component.css'],
})
export class SaidaProdutosComponent implements OnInit {
  constructor(private productService: ProductsService) {}
  products = [
    {
      id: '',
      nome: '',
      lote: '',
      quantidade: '',
      unidade: '',
      precoVenda: '',
      total: '',
      dataValidade: '',
      dataSaida: '',
      nomeCliente: '',
      cnpjCliente: '',
    },
  ];

  ngOnInit(): void {
    this.productService
      .getOutputProducts()
      .then((responseData) => (this.products = responseData));
  }
}
