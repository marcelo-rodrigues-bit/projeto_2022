import { Component, OnInit } from '@angular/core';
import { EntradaProdutoService } from 'src/app/common/services/entrada-produto/entrada-produto.service';

@Component({
  selector: 'app-list',
  templateUrl: './entrada-list.component.html',
  styleUrls: ['./entrada-list.component.css'],
})
export class EntradaListComponent implements OnInit {
  constructor(private entradaProdutoService: EntradaProdutoService) {}
  entradaProdutos = [
    {
      id: '',
      nome: '',
      lote: '',
      quantidade: '',
      unidade: '',
      precoCusto: '',
      total: '',
      dataValidade: '',
      dataEntrada: '',
      nomeFornecedor: '',
      cnpjFornecedor: '',
    },
  ];

  ngOnInit(): void {
    this.entradaProdutoService
      .getEntradaProdutos()
      .then((responseData) => (this.entradaProdutos = responseData));
  }
}
