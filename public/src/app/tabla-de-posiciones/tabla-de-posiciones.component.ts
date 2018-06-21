
import { Component, OnInit } from '@angular/core';
import { TablaPosicionesService } from '../services/tabla-posiciones.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-tabla-de-posiciones',
  templateUrl: './tabla-de-posiciones.component.html',
  styleUrls: ['./tabla-de-posiciones.component.css']
})
export class TablaDePosicionesComponent implements OnInit {

  public clasificacion = [];
  public cuadrangular = [];
  constructor(private service : TablaPosicionesService) { }

  getClasificacion(): void {
    this.service.getClasificacion().subscribe(
      res => this.clasificacion = res,
      err => console.log(err)
    )
  }

  getCuadrangular(): void {
    this.service.getCuadrangular().subscribe(
      res => this.cuadrangular = res,
      err => console.log(err)
    )
  }

  ngOnInit():void {
    this.getClasificacion();
    this.getCuadrangular();
  }

}