import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CalendarioService {


  constructor(private http: HttpClient) { }

  getCalendario() {
    return this.http.get<any>('calendario/');
  }

}