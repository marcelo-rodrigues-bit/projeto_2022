import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EntradaProdutoService {
  constructor(private httpService: HttpClient) {}

  async getEntradaProdutos(): Promise<any> {
    const token = window.localStorage.getItem('token');
    const response = await this.httpService
      .get(`${environment.baseUrl}/api/entrada/produto`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
    console.log(response);
    return response;
  }

  async postEntradaProduto(produto: Record<string, string>) {
    const token = window.localStorage.getItem('token');
    produto.dataValidade = this.formatDate(produto.dataValidade);
    produto.dataFabricacao = this.formatDate(produto.dataFabricacao);
    console.log(produto);
    return await this.httpService
      .post(`${environment.baseUrl}/api/entrada/produto`, produto, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  formatDate(dataForm: string) {
    let data = new Date(dataForm);
    let month = data.getMonth() + 1;
    if (month <= 9) {
      month = 0 + data.getMonth() + 1;
    }
    let dataFormatada =
      data.getDate() + 1 + '/' + month + '/' + data.getFullYear();
    return dataFormatada;
  }
}
