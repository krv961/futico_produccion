import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import { TablaPosicionesService } from '../services/tabla-posiciones.service';
import { InfoService } from '../services/info.service';
import { HttpModule } from '@angular/http';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', 'bootstrap.css', 'nice-select.css', 'carousel.css', 'magnific-popup.css'],
  providers: [InfoService]
})
export class InicioComponent implements OnInit {


  public cuadrangular = [];
  constructor(private service : TablaPosicionesService) { }


  getCuadrangular(): void {
    this.service.getCuadrangular().subscribe(
      res => this.cuadrangular = res,
      err => console.log(err)
    )
  }
  
  ngOnInit():void {
    this.getCuadrangular();

  }

  getVideoTag() {
    return `<video autoplay loop muted width="100%" height="100%" >
    <source src="../../assets/videoplayback.mp4" type="video/webm" />
  </video>`;
  }



}
