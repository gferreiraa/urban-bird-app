import { Component, OnInit } from '@angular/core';
import { OfertasServices } from 'src/app/ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasServices ]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public subjectPesquisa: Subject<string> = new Subject<string>();

  constructor( private OfertasService: OfertasServices) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa.pipe(
      switchMap((termo: string) => {
        console.log( 'Requisição http para api' );
        return this.OfertasService.pesquisaOfertas(termo);
      })
    );
    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public search(searchReference: string): void {
    this.subjectPesquisa.next(searchReference);
  }

}
