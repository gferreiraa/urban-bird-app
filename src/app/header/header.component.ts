import { Component, OnInit } from '@angular/core';
import { OfertasServices } from 'src/app/ofertas.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [ OfertasServices ]
})
export class HeaderComponent implements OnInit {

  constructor( private OfertasService: OfertasServices) { }

  ngOnInit() {
  }

  public search(searchReference: string): void {
    console.log(searchReference);
  }

}
