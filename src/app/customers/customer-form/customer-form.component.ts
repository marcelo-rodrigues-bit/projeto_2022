import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/common/services/customer/customer.service';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css'],
})
export class CustomerFormComponent implements OnInit {
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private routeUrl: ActivatedRoute
  ) {}

  customerForm = new FormGroup({
    nome: new FormControl(),
    cnpj: new FormControl(),
    endereco: new FormControl(),
    telefone: new FormControl(),
  });

  redirectToCustomers() {
    this.router.navigate(['customers']);
  }

  ngOnInit(): void {}

  async onSubmit() {
    const id = this.routeUrl.snapshot.params.id;
    if (!id) {
      await this.customerService.createCustomer(this.customerForm.value);
    } else {
      const customer = { ...this.customerForm.value, id: id };
      await this.customerService.updateCustomer(customer);
    }
    this.redirectToCustomers();
  }
}
