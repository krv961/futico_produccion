import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-herediano',
  templateUrl: './herediano.component.html',
  styleUrls: ['./herediano.component.css']
})
export class HeredianoComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('csh')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
