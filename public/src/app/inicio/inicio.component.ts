import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TablaPosicionesService } from '../services/tabla-posiciones.service';
import { InfoService } from '../services/info.service';
import { interfaceTest } from './interfaceTest';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', 'bootstrap.css', 'nice-select.css', 'carousel.css', 'magnific-popup.css'],
  providers: [InfoService]
})
export class InicioComponent implements OnInit {

  public tablaInfo : interfaceTest[];
  constructor(private service : TablaPosicionesService) { }

  getTabla(): void {
    this.service.getTabla().subscribe(
      resultArray => this.tablaInfo = resultArray
      , error => console.log("error: " + error)
    );
    console.log(this.tablaInfo);
  }


  ngOnInit(): void {
    this.getTabla();
  }

}
