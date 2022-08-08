import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FinancialServicePagar } from 'src/app/common/services/financial/financialPagar.service';

@Component({
  selector: 'app-relatorio-contas-pagar',
  templateUrl: './relatorio-contas-pagar.component.html',
  styleUrls: ['./relatorio-contas-pagar.component.css']
})
export class RelatorioContasPagarComponent implements OnInit {

  constructor(private financialService:  FinancialServicePagar) {}

  dateForm = new FormGroup({
    startDate : new FormControl,
    endDate : new FormControl
  })


  financialPagarList = {

    cobrancas : [{
      id: '',
      numeroPedido: '',
      valor: '',
      nomeFornecedor: '',
      cnpjFornecedor: '',
      enderecoFornecedor: '',
      telefoneFornecedor: '',
      vencimento: '',
      status: '',
      total: ''
    }],
    total: '',
  }

  ngOnInit(): void {
    /*this.financialService
    .getFinancialPagar()
    .then((responseData) => (this.financialPagar = responseData));
    */
  }

  async onSubimit() {

    const dateForm = this.dateForm.value
    const response = await this.financialService.getRelatorioPagar(dateForm.startDate, dateForm.endDate)
    this.financialPagarList = response
  }
}