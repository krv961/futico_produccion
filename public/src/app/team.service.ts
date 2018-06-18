import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) { }

  getTeam(team) {
    return this.http.get<any>('api/' + team);
  }

}
