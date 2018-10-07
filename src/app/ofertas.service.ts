import { Http } from '@angular/http';
import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

@Injectable()
export class OfertasServices {

  constructor(private http: Http) {}

  public getOfertas(): Promise<Oferta[]> {
    // Executar requisição http
    return this.http.get('http://localhost:3000/ofertas')
    .toPromise()
    .then((resposta: any) => resposta.json());
    // Retornar uma promise  Oferta[]
  }
}
