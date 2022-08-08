import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer-model';
import { CustomerService } from 'src/app/common/services/customer/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css'],
})
export class CustomerListComponent implements OnInit {
  constructor(private customerService: CustomerService) {}

  customers = [
    {
      id: '',
      nome: '',
      cnpj: '',
      endereco: '',
    },
  ];

  ngOnInit(): void {
    // this.customers = this.customers;
    this.customerService
      .getCustomers()
      .then((responseData) => (this.customers = responseData));
  }
}
