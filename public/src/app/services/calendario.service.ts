import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx'


import { calendarioInterface } from '../calendario/calendarioInterface';

@Injectable()
export class CalendarioService {

  private url = "https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/results.json?api_key=wtm44z6e274xu7mva4kwjkry";

  constructor(private http: Http) { }

  getCalendario() : Observable<calendarioInterface[]> {
    return this.http
    .get(this.url).map((response:Response) => {
      return <calendarioInterface[]>response.json();
    })
    .catch(this.handleError);
}

  private handleError(error : Response) {
    return Observable.throw(error.statusText);
  }

}
