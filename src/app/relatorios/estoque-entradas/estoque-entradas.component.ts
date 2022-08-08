import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from 'src/app/common/services/product/products.service';

@Component({
  selector: 'app-estoque-entradas',
  templateUrl: './estoque-entradas.component.html',
  styleUrls: ['./estoque-entradas.component.css']
})
export class EstoqueEntradasComponent implements OnInit {
  constructor(private productService:  ProductsService) {}

  dateForm = new FormGroup({
    startDate : new FormControl,
    endDate : new FormControl
  })


  productsRelatorioList =[

    {
  
      id: '',
      nome: '',
      lote: '',
      funcionario: '',
      precoCusto: '',
      dataValidade: '', 
      dataEntrada: '',
      quantidade: '',
      unidade: '',
      total: '',
      nomeFornecedor: '',
      cnpjFornecedor:'',
      enderecoFornecedor: '',
      telefoneFornecedor: '',
      dataFabricacao: '',
      descricaoProduto:''
    }
  ] 

  ngOnInit(): void {
  }

  async onSubimit() {

    const dateForm = this.dateForm.value
    const response = await this.productService.getProductsRelatorio(dateForm.startDate, dateForm.endDate)
    this.productsRelatorioList = response
  }
}
