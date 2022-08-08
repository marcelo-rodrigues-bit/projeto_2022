import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendor } from 'src/app/vendor/models/vendor-model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class VendorService {
  constructor(private http: HttpClient) {}

  async getVendors(): Promise<any> {
    const token = window.localStorage.getItem('token');
    return await this.http
      .get(`${environment.baseUrl}/api/fornecedores`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  async createVendor(vendor: Vendor): Promise<any> {
    const token = window.localStorage.getItem('token');
    await this.http
      .post(`${environment.baseUrl}/api/fornecedor`, vendor, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }

  async updateVendor(vendor: Vendor): Promise<any> {
    const token = window.localStorage.getItem('token');
    await this.http
      .put(`${environment.baseUrl}/api/fornecedor/${vendor.id}`, vendor, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .toPromise();
  }
}
