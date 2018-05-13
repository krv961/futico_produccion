import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-limon',
  templateUrl: './limon.component.html',
  styleUrls: ['./limon.component.css']
})
export class LimonComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('lim')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
