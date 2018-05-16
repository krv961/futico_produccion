import { Component, OnInit } from '@angular/core';
import { TablaPosicionesService } from '../tabla-posiciones.service';
import { HttpModule } from '@angular/http';
import { interfaceTest } from '../interfaceTest';

@Component({
  selector: 'app-tabla-de-posiciones',
  templateUrl: './tabla-de-posiciones.component.html',
  styleUrls: ['./tabla-de-posiciones.component.css']
})
export class TablaDePosicionesComponent implements OnInit {

  public tablaInfo : interfaceTest[];
  constructor(private service : TablaPosicionesService) { }

  getTabla(): void {
    this.service.getTabla().subscribe(
      resultArray => this.tablaInfo = resultArray
      , error => console.log("error: " + error)
    )
    console.log(this.tablaInfo)
  }

  ngOnInit():void {
    this.getTabla();
  }

}


