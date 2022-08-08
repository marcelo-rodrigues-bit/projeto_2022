import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/common/services/product/products.service';

@Component({
  selector: 'app-estoque-entradas',
  templateUrl: './relatorio-saidas.component.html',
  styleUrls: ['./relatorio-saidas.component.css'],
})
export class RelatorioSaidasComponent implements OnInit {
  constructor(private productService: ProductsService) {}

  dateForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  productsRelatorioList = [
    {
      id: '',
      nome: '',
      lote: '',
      funcionario: '',
      precoVenda: '',
      dataValidade: '',
      dataSaida: '',
      quantidade: '',
      unidade: '',
      total: '',
      nomeCliente: '',
      cnpjCliente: '',
      enderecoCliente: '',
      telefoneCliente: '',
      dataFabricacao: '',
      descricaoProduto: '',
    },
  ];

  ngOnInit(): void {}

  async onSubimit() {
    const dateForm = this.dateForm.value;
    const response = await this.productService.getSaidaRelatorio(
      dateForm.startDate,
      dateForm.endDate
    );
    console.log(response);
    this.productsRelatorioList = response;
  }
}
