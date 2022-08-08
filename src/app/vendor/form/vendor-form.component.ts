import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorService } from 'src/app/common/services/vendor/vendor.service';
import { Vendor } from '../models/vendor-model';

@Component({
  selector: 'app-form',
  templateUrl: './vendor-form.component.html',
  styleUrls: ['./vendor-form.component.css'],
})
export class VendorFormComponent implements OnInit {
  constructor(
    private vendorService: VendorService,
    private router: Router,
    private routeUrl: ActivatedRoute
  ) {}

  vendorForm = new FormGroup({
    nome: new FormControl(),
    cnpj: new FormControl(),
    endereco: new FormControl(),
    telefone: new FormControl(),
  });

  ngOnInit(): void {}

  redirectToVendors() {
    this.router.navigate(['vendors']);
  }

  async onSubmit() {
    const id = this.routeUrl.snapshot.params.id;
    if (!id) {
      await this.vendorService.createVendor(this.vendorForm.value);
    } else {
      const vendor = { ...this.vendorForm.value, id: id };
      await this.vendorService.updateVendor(vendor);
    }
    this.redirectToVendors();
  }
}
