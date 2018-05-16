import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-liberia',
  templateUrl: './liberia.component.html',
  styleUrls: ['./liberia.component.css']
})
export class LiberiaComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('lib')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
