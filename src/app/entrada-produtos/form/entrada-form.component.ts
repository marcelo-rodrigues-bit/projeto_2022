import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntradaProdutoService } from 'src/app/common/services/entrada-produto/entrada-produto.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './entrada-form.component.html',
  styleUrls: ['./entrada-form.component.css'],
})
export class EntradaProdutoFormComponent implements OnInit {
  constructor(
    private entradaProdutoService: EntradaProdutoService,
    private router: Router
  ) {}

  entradaProdutoForm = new FormGroup({
    nome: new FormControl(),
    descricaoProduto: new FormControl(),
    unidade: new FormControl(),
    quantidade: new FormControl(),
    lote: new FormControl(),
    dataFabricacao: new FormControl(),
    dataValidade: new FormControl(),
    precoCusto: new FormControl(),
    nomeFornecedor: new FormControl(),
    cnpjFornecedor: new FormControl(),
    enderecoFornecedor: new FormControl(),
    telefoneFornecedor: new FormControl(),
  });

  async onSubmit() {
    await this.entradaProdutoService.postEntradaProduto(
      this.entradaProdutoForm.value
    );
    this.router.navigate(['entrada-produtos']);
  }

  ngOnInit(): void {}
}
