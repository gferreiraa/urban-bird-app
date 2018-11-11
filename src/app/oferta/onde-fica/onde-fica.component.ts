import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasServices } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasServices ]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica = '';

  constructor( private route: ActivatedRoute, private ofertaService: OfertasServices) { }

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: Params) => {
      this.ofertaService.getOndeFicaOfertaPorId(parametros.id)
      .then((descricao: string) => {
        this.ondeFica = descricao;
      });
    });
  }

}
