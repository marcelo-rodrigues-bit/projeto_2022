import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { productsCadastroComponent } from './product/form/products.component';
import { productsListaComponent } from './product/list/product-list.component';
import { BackgroundComponent } from './common/screens/background_main/background.component';
import { HomeComponent } from './layout/home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './account/login/login.component';
import { CreateAccountComponent } from './account/create-account/create-account.component';
import { AuthGuard } from './account/guard/auth.guard';
import { SaidaProdutosComponent } from './saida-produtos/saida-produtos.component';
import { RegistrarSaidaComponent } from './saida-produtos/registrar-saida/registrar-saida.component';
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

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: BackgroundComponent },
      { path: 'informacao', component: InformacaoComponent },
      { path: 'saida-produtos', component: SaidaProdutosComponent },
      { path: 'saida-produtos/registrar', component: RegistrarSaidaComponent },
      {
        path: 'entrada-produtos/registrar',
        component: EntradaProdutoFormComponent,
      },
      { path: 'entrada-produtos', component: EntradaListComponent },
      {
        path: 'saida-produtos/registrar/:id/editar',
        component: RegistrarSaidaComponent,
      },
      { path: 'product-registration', component: productsListaComponent },
      { path: 'stock', component: StockComponent },
      { path: 'accounts-receivable', component: AccountsReceivableComponent },
      { path: 'accounts-payable', component: AccountsPayableComponent },
      {
        path: 'relatorio-contas-pagar',
        component: RelatorioContasPagarComponent,
      },
      {
        path: 'relatorio-contas-receber',
        component: RelatorioContasReceberComponent,
      },
      {
        path: 'relatorio-entradas-produtos',
        component: EstoqueEntradasComponent,
      },
      {
        path: 'relatorio-saidas-produtos',
        component: RelatorioSaidasComponent,
      },

      {
        path: 'product-registration/register-product',
        component: productsCadastroComponent,
      },
      {
        path: 'product-registration/:id/editar',
        component: UpdateProductComponent,
      },
      { path: 'vendors', component: VendorListComponent },
      { path: 'vendors/registration', component: VendorFormComponent },
      {
        path: 'vendors/registration/:id/patch',
        component: VendorFormComponent,
      },
      { path: 'customers', component: CustomerListComponent },
      { path: 'customers/registration', component: CustomerFormComponent },
      {
        path: 'customers/registration/:id/patch',
        component: CustomerFormComponent,
      },
    ],
    canActivate: [AuthGuard],
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'create-account', component: CreateAccountComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
