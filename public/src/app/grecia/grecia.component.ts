import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-grecia',
  templateUrl: './grecia.component.html',
  styleUrls: ['./grecia.component.css']
})
export class GreciaComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('gre')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}

  