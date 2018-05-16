import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

<<<<<<< HEAD
  private info = 'api/lda';

=======
>>>>>>> kevin
  constructor(private http: HttpClient) { }

  private data = '';
  getTeam(team) {
    return this.http.get<any>('api/' + team);
  }

}
