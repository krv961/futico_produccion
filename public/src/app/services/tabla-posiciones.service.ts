import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TablaPosicionesService {


  constructor(private http: HttpClient) { }

  getClasificacion() {
    return this.http.get<any>('tabla/clasificacion');
  }

  getCuadrangular() {
    return this.http.get<any>('tabla/cuadrangular');
  }


}



