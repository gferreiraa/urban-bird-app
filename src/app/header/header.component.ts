import { Component, OnInit } from '@angular/core';
import { OfertasServices } from 'src/app/ofertas.service';
import { Oferta } from '../shared/oferta.model';

import { Observable, Subject, of } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasServices ]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable <Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasServices) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((termo: string) => {
        console.log('requisição http para a api ', termo);

        if (termo.trim() === '') {
          return of([]);
        }
        return this.ofertasService.pesquisaOfertas(termo);
      }),
      catchError ((erro) => {
        console.log(erro);
        return of([]);
      })
    );

  }
  public pesquisa(termoDaBusca: string): void {
    console.log('keyup caracter: ', termoDaBusca);
    this.subjectPesquisa.next(termoDaBusca);
  }
}
