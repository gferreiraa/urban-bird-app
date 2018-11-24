import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControlName, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [ Validators.required, Validators.minLength(3),     Validators.maxLength(4)]),
    'numero': new FormControl(null),
    'complemento': new FormControl(null, [Validators.required]),
    'formaPagamento': new FormControl(null, [Validators.required])
  });


  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      console.log('Formulário Inávlido');
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('formaPagamento').markAsTouched();

    }
  }
}
