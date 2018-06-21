import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TablaPosicionesService } from '../services/tabla-posiciones.service';
import { InfoService } from '../services/info.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', 'bootstrap.css', 'nice-select.css', 'carousel.css', 'magnific-popup.css'],
  providers: [InfoService]
})
export class InicioComponent implements OnInit {

  constructor(private service : TablaPosicionesService) { }


  ngOnInit(): void {
  }

}
