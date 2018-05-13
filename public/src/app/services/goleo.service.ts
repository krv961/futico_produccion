import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoleoService {

  constructor(private http: HttpClient) { }

  private data = '';
  getGoles(team) {
    console.log('goleo service tiene ' + JSON.stringify(this.http.get<any>('goleo/' + team)));
    console.log('se trae la siguiente url ' + 'goleo/' + team);
    return this.http.get<any>('goleo/' + team);

  }
}
