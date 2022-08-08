import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FinancialServiceReceber } from 'src/app/common/services/financial/financialReceber.service';

@Component({
  selector: 'app-relatorio-contas-receber',
  templateUrl: './relatorio-contas-receber.component.html',
  styleUrls: ['./relatorio-contas-receber.component.css'],
})
export class RelatorioContasReceberComponent implements OnInit {
  constructor(private financialService: FinancialServiceReceber) {}

  dateForm = new FormGroup({
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  financialPagarList = {
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

  ngOnInit(): void {}

  async onSubimit() {
    const dateForm = this.dateForm.value;
    const response = await this.financialService.getRelatorioReceber(
      dateForm.startDate,
      dateForm.endDate
    );
    console.log(response);
    this.financialPagarList = response;
  }
}
