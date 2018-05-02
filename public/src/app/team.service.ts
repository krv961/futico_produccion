import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TeamService {

  private ldaUrl = 'api/lda';

  constructor(private http: HttpClient) { }

  private data = '';
  getLDA() {
    return this.http.get<any>(this.ldaUrl)
  }

}
