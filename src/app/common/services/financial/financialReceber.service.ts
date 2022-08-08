import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FinancialServiceReceber {
  constructor(private httpService: HttpClient) {}

  async getFinancialReceber(): Promise<any> {
    const token = window.localStorage.getItem('token');
    const response = await this.httpService
      .get(`${environment.baseUrl}/api/saida/cobrancas`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .toPromise();
    console.log(response);
    return response;
  }

  async getRelatorioReceber(statDate: string, endDate: string): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.httpService
      .get(
        `${environment.baseUrl}/api/saida/cobrancas/${statDate}/${endDate}`,
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      )
      .toPromise();
  }
}
