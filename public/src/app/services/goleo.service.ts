import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GoleoService {

  constructor(private http: HttpClient) { }

  getGoles(team) {
    return this.http.get<any>('goleo/' + team);

  }

  getAllGoles() {
    return this.http.get<any>('goleo/');
  }
}
