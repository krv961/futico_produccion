import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-saprissa',
  templateUrl: './saprissa.component.html',
  styleUrls: ['./saprissa.component.css']
})
export class SaprissaComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('sap')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
