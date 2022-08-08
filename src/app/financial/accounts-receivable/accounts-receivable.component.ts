import { Component, OnInit } from '@angular/core';
import { FinancialServiceReceber } from 'src/app/common/services/financial/financialReceber.service';

@Component({
  selector: 'app-accounts-receivable',
  templateUrl: './accounts-receivable.component.html',
  styleUrls: ['./accounts-receivable.component.css'],
})
export class AccountsReceivableComponent implements OnInit {
  constructor(private financialService: FinancialServiceReceber) {}

  financialReceberList = {
    cobrancas: [
      {
        id: '',
        numeroPedido: '',
        valor: '',
        nomeDevedor: '',
        cnpjDevedor: '',
        enderecoDevedor: '',
        telefoneDevedor: '',
        vencimento: '',
        status: '',
        total: '',
      },
    ],
    total: '',
  };

  ngOnInit(): void {
    this.financialService
      .getFinancialReceber()
      .then((responseData) => (this.financialReceberList = responseData));
  }
}
