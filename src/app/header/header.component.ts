import { Component, OnInit } from '@angular/core';
import { OfertasServices } from 'src/app/ofertas.service';
import { Observable } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasServices ]
})
export class HeaderComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;

  constructor( private OfertasService: OfertasServices) { }

  ngOnInit() {
  }

  public search(searchReference: string): void {
    this.ofertas = this.OfertasService.pesquisaOfertas(searchReference);
    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (erro: any) => console.log('Erro Status: ', erro.status)
    );
  }

}
