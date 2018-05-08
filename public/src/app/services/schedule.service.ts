import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';




@Injectable()
export class ScheduleService {

  public tournament: Object;
  public sportsEvent: Object;


  constructor(private _http: HttpClient) { }


  getInfo() {
    // tslint:disable-next-line:max-line-length
    this._http.get('https://api.sportradar.us/soccer-xt3/other/es/tournaments/sr:tournament:84/schedule.json?api_key=wtm44z6e274xu7mva4kwjkry')
                .subscribe(data => {
                       this.tournament = data['tournament'].name;
                      // this.content = data.content;
                       console.log(this.tournament);
               });
 }
}