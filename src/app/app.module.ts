import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { productsListaComponent } from './product/list/product-list.component';
import { productsCadastroComponent } from './product/form/products.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { SaidaProdutosComponent } from './saida-produtos/saida-produtos.component';
import { RegistrarSaidaComponent } from './saida-produtos/registrar-saida/registrar-saida.component';
import { HttpErrorInterceptor } from './http-interceptors/http-error-interceptor';
import { httpInterceptorProviders } from './http-interceptors';
import { VendorListComponent } from './vendor/list/vendor-list.component';
import { VendorFormComponent } from './vendor/form/vendor-form.component';
import { CustomerListComponent } from './customers/customer-list/customer-list.component';
import { CustomerFormComponent } from './customers/customer-form/customer-form.component';
import { StockComponent } from './stock/stock.component';
import { AccountsReceivableComponent } from './financial/accounts-receivable/accounts-receivable.component';
import { AccountsPayableComponent } from './financial/accounts-payable/accounts-payable.component';
import { EntradaListComponent } from './entrada-produtos/list/entrada-list.component';
import { EntradaProdutoFormComponent } from './entrada-produtos/form/entrada-form.component';
import { UpdateProductComponent } from './product/update/update-product.component';
import { InformacaoComponent } from './informacao/informacao.component';
import { RelatorioContasPagarComponent } from './relatorios/relatorio-contas-pagar/relatorio-contas-pagar.component';
import { RelatorioContasReceberComponent } from './relatorios/relatorio-contas-receber/relatorio-contas-receber.component';
import { EstoqueEntradasComponent } from './relatorios/estoque-entradas/estoque-entradas.component';
import { RelatorioSaidasComponent } from './relatorios/relatorio-saidas/relatorio-saidas.component';

@NgModule({
  declarations: [
    AppComponent,

    NavbarComponent,
    productsListaComponent,
    productsCadastroComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    AuthenticationComponent,
    SaidaProdutosComponent,
    RegistrarSaidaComponent,
    VendorListComponent,
    VendorFormComponent,
    CustomerListComponent,
    CustomerFormComponent,
    StockComponent,
    AccountsReceivableComponent,
    AccountsPayableComponent,
    EntradaListComponent,
    EntradaProdutoFormComponent,
    UpdateProductComponent,
    InformacaoComponent,
    RelatorioContasPagarComponent,
    RelatorioContasReceberComponent,
    EstoqueEntradasComponent,
    RelatorioSaidasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot({
      showMaskTyped: true,
    }),
  ],
  providers: [
    httpInterceptorProviders,
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
