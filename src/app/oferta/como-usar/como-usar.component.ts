import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasServices } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasServices]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar = '';

  constructor(private route: ActivatedRoute, private ofertaService: OfertasServices) { }

  ngOnInit() {
    this.ofertaService.getComoUsarOfertaPorId(this.route.parent.snapshot.params['id'])
    .then((descricao: string) => {
      this.comoUsar = descricao;
    });
  }
}
