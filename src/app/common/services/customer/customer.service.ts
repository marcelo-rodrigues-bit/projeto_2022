import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from 'src/app/customers/models/customer-model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private httpService: HttpClient) {}

  async getCustomers(): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.httpService
      .get(`${environment.baseUrl}/api/clientes`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .toPromise();
  }

  async createCustomer(customer: Customer): Promise<any> {
    const token = window.localStorage.getItem('token');
    await this.httpService
      .post(`${environment.baseUrl}/api/cliente`, customer, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  async updateCustomer(customer: Customer): Promise<any> {
    const token = window.localStorage.getItem('token');
    await this.httpService
      .put(`${environment.baseUrl}/api/cliente/${customer.id}`, customer, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }
}
