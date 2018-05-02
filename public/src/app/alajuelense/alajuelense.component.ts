import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-alajuelense',
  templateUrl: './alajuelense.component.html',
  styleUrls: ['./alajuelense.component.css']
})
export class AlajuelenseComponent implements OnInit {

  ldaInfo = []
  constructor(private teamService : TeamService) { }

  ngOnInit() {
    this.teamService.getLDA()
    .subscribe(
      res => this.ldaInfo = res,
      err => console.log(err)
    )
  }

}
