import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';


  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
  }

  public atualizaNumero (numero: string): void {
    this.numero = numero;
  }

  public atualizarComplemente (complemento: string): void {
    this.complemento = complemento;
  }

  public atualizaFormaPagamento (formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
  }

}
