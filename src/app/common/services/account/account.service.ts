import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private http: HttpClient) {}

  async login(user: any) {
    const result = await this.http
      .post<any>(`${environment.baseUrl}/auth/login`, user)
      .toPromise();
    if (result && result.token) {
      window.localStorage.setItem('token', result.token);
      return true;
    }
    return false;
  }

  async createAccount(account: any) {
    const result = await this.http
      .post(`${environment.baseUrl}/auth/user`, account)
      .toPromise();
  }

  getAuthorizationToken() {
    const token = window.localStorage.getItem('token');
    return token;
  }

  async getProducts(): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.http
      .get(`${environment.baseUrl}/api/saida/produtos`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }
}
