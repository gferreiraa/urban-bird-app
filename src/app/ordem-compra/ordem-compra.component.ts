import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from './../ordem-compra.service';
@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
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

    // Controlar Botão Confirmar Compra
    public formEstado  = 'disabled';

  constructor( private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
    this.ordemCompraService.efetivarCompra();
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
    this.habilitaForm();
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
    this.habilitaForm();
  }

  public atualizaComplemento (complemento: string): void {
    this.complemento = complemento;
    this.complementoEstadoPrimitivo = false;
    if ( this.complemento.length > 0) {
      this.complementoValido = true;
    }
    this.habilitaForm();
  }

  public atualizaFormaPagamento (formaPagamento: string): void {
    this.formaPagamento = formaPagamento;
    this.formaPagamentoEstadoPrimitivo = false;
    if ( this.formaPagamento.length > 0 ) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }
    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }


}
