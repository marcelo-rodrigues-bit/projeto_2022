import { Component, OnInit } from '@angular/core';
import { Vendor } from '../models/vendor-model';
import { VendorService } from 'src/app/common/services/vendor/vendor.service';

@Component({
  selector: 'app-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css'],
})
export class VendorListComponent implements OnInit {
  // vendors: Vendor[];
  vendors: Vendor[] = [
    {
      id: '',
      nome: '',
      cnpj: '',
      endereco: '',
    },
  ];
  constructor(private vendorService: VendorService) {}

  ngOnInit(): void {
    // this.vendors = this.vendors;
    this.vendorService
      .getVendors()
      .then((responseData) => (this.vendors = responseData));
  }
}
