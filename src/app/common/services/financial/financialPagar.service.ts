import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FinancialServicePagar {
  constructor(private httpService: HttpClient) {}

  async getFinancialPagar(): Promise<any> {
    const token = window.localStorage.getItem('token');
    const response = await this.httpService
      .get(`${environment.baseUrl}/api/entrada/cobrancas`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .toPromise();
    console.log(response);
    return response;
  }

  async getRelatorioPagar(statDate: string, endDate: string): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.httpService
      .get(
        `${environment.baseUrl}/api/entrada/cobrancas/${statDate}/${endDate}`,
        {
          headers: { Authorization: 'Bearer ' + token },
        }
      )
      .toPromise();
  }
}
