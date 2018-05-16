import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-santos',
  templateUrl: './santos.component.html',
  styleUrls: ['./santos.component.css']
})
export class SantosComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('san')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
