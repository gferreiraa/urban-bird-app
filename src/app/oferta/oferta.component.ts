import { Oferta } from './../shared/oferta.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasServices } from './../ofertas.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasServices ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasServices
    ) { }

  ngOnInit() {
    this.ofertasService.getOfertaPorId(this.route.snapshot.params['id'])
    .then((oferta: Oferta) => {
      this.oferta = oferta;
    });
  }

  /*
    observable (Observável)
    Observable (Observador)
  */

  let myObservable = Observable.create((observer: Observer<T>) => {
    observer.next('First Event');
  });
  myObservable.subscribe(
    // Instrução, Erro ou Conclusão
    (resultado: any ) => console.log(resultado)
  );
}
