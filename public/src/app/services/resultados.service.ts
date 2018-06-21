import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ResultadosService {

  constructor(private http: HttpClient) { }

  getResults(team) {
    return this.http.get<any>('resultados/' + team);
  }

}