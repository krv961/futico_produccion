import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'


import { interfaceTest } from '../tabla-de-posiciones/interfaceTest';

@Injectable()
export class TablaPosicionesService {

  private url = "https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/standings.json?api_key=wtm44z6e274xu7mva4kwjkry";

  constructor(private http: Http) { }

  getTabla() : Observable<interfaceTest[]> {
    return this.http
    .get(this.url).map((response:Response) => {
      return <interfaceTest[]>response.json();
    })
    .catch(this.handleError);
}

  private handleError(error : Response) {
    return Observable.throw(error.statusText);
  }

}



