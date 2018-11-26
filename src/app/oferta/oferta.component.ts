import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from './../ofertas.service';
import { Observable, Observer } from 'rxjs';
import { CarrinhoService } from './../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasServices, CarrinhoService]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasServices,
    private carrrinhoService: CarrinhoService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((parametros: Params) => {
      this.ofertasService.getOfertaPorId(parametros.id)
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });
    });
  }

  public adicionarItemCarrinho(oferta: Oferta): void {
    this.carrrinhoService.incluirItem(this.oferta);
  }
}
