import { Component, OnInit } from '@angular/core';
import { OfertasServices } from './../ofertas.service';
import { Oferta } from '../shared/oferta.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasServices ]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor( private ofertasService: OfertasServices) { }

  ngOnInit() {
    // this.ofertas = this.OfertasService.getOfertas();
    // console.log(this.ofertas);
    this.ofertasService.getOfertas()
    .then(( ofertas: Oferta[] ) => {
      // tslint:disable-next-line:no-unused-expression
      this.ofertas = ofertas;
    })
    .catch((param: any) => {
      console.log(param);
    });
  }

}
