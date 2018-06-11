import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';



@Component({
  selector: 'app-santos',
  templateUrl: './santos.component.html',
  styleUrls: ['./santos.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SantosComponent implements OnInit {

  santosInfo = [];
  santosGoleo = [];

  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  ngOnInit() {
    this.teamService.getTeam('san')
    .subscribe(
      res => this.santosInfo = res,
      err => console.log(err)
    );

    console.log(JSON.stringify(this,  res => this.santosInfo));                  // '{}'


    this.goleoService.getGoles('SAN')
    .subscribe(
      res => this.santosGoleo = res,
      err => console.log(err)
    );

  }
}
