import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
@Component({
  selector: 'app-alajuelense',
  templateUrl: './alajuelense.component.html',
  styleUrls: ['./alajuelense.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlajuelenseComponent implements OnInit {

  ldaInfo = [];
  ldaGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  ngOnInit() {
    this.teamService.getTeam('lda')
    .subscribe(
      res => this.ldaInfo = res,
      err => console.log(err)
    );

    console.log(JSON.stringify(this,  res => this.ldaInfo));                  // '{}'


    this.goleoService.getGoles('LDA')
    .subscribe(
      res => this.ldaGoleo = res,
      err => console.log(err)
    );

  }

}