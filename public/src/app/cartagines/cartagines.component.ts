import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-cartagines',
  templateUrl: './cartagines.component.html',
  styleUrls: ['./cartagines.component.css']
})
export class CartaginesComponent implements OnInit {

  info = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('csc')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
