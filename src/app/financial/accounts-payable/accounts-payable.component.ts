import { Component, OnInit } from '@angular/core';
import { FinancialServicePagar } from 'src/app/common/services/financial/financialPagar.service';

@Component({
  selector: 'app-accounts-payable',
  templateUrl: './accounts-payable.component.html',
  styleUrls: ['./accounts-payable.component.css'],
})
export class AccountsPayableComponent implements OnInit {
  constructor(private financialService: FinancialServicePagar) {}

  financialPagarList = {
    cobrancas: [
      {
        id: '',
        numeroPedido: '',
        valor: '',
        nomeFornecedor: '',
        cnpjFornecedor: '',
        enderecoFornecedor: '',
        telefoneFornecedor: '',
        vencimento: '',
        status: '',
        total: '',
      },
    ],
    total: '',
  };

  ngOnInit(): void {
    this.financialService
      .getFinancialPagar()
      .then((responseData) => (this.financialPagarList = responseData));
  }
}
