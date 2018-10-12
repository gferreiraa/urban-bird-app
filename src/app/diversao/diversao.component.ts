import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasServices } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasServices ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(private ofertasService: OfertasServices) { }

  ngOnInit() {
    this.ofertasService.getOfertasPorCategoria('diversao')
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas;
      });
  }

}

