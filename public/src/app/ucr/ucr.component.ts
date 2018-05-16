import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-ucr',
  templateUrl: './ucr.component.html',
  styleUrls: ['./ucr.component.css']
})
export class UcrComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('ucr')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
