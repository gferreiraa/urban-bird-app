import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasServices ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasServices) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('restaurante')
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas;
      });
  }

}
