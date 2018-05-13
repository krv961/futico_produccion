import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-guadalupe',
  templateUrl: './guadalupe.component.html',
  styleUrls: ['./guadalupe.component.css']
})
export class GuadalupeComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('gfc')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
