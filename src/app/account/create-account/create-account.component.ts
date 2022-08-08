import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/common/services/account/account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  account = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    cpf: '',
  };

  constructor(private accountService: AccountService, private router: Router) {}

  ngOnInit(): void {}

  async onSubmit() {
    try {
      await this.accountService.createAccount(this.account);
      this.router.navigate(['login']);
    } catch (err: any) {
      alert(err.error.error || err.error.message);
    }
  }
}
