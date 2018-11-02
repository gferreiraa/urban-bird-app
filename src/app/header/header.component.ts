import { Component, OnInit } from '@angular/core';
import { OfertasServices } from 'src/app/ofertas.service';
import { Oferta } from '../shared/oferta.model';

import '../util/rxjs-extensios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasServices ]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>();
  public ofertas2: Oferta[];

  constructor( private OfertasService: OfertasServices) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((termo: string) => {
        console.log( 'Requisição http para api' );
        if (termo.trim() === '') {
          return of<Oferta[]>([]);
        }
        return this.OfertasService.pesquisaOfertas(termo);
      })
    );
    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas;
    });
  }

  public search(searchReference: string): void {
    this.subjectPesquisa.next(searchReference);
  }

}
