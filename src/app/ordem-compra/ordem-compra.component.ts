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

    // Controle de Validação dos Campos
    public enderecoValido: boolean;
    public numeroValido: boolean;
    public complementoValido: boolean;
    public formaPagamentoValido: boolean;

    // Estado Pristine (Primitivo dos campos)
    public enderecoEstadoPrimitivo = true;
    public numeroEstadoPrimitivo = true;
    public complementoEstadoPrimitivo = true;
    public formaPagamentoEstadoPrimitivo = true;

  constructor() { }

  ngOnInit() {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    this.enderecoEstadoPrimitivo = false;
    // Regra para validar endereço: String maior que 3
    if ( this.endereco.length > 2) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }
  }

  public atualizaNumero (numero: string): void {
    this.numero = numero;
    this.numeroEstadoPrimitivo = false;
    // Regra para validar número: Number maior ou igual a 2
    if ( this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }
  }

  public atualizaComplemento (complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if ( this.complemento.length > 0) {
      this.complementoValido = true;
    }
  }

  public atualizaFormaPagamento (formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if ( this.formaPagamento.length > 0 ) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
  }



}
