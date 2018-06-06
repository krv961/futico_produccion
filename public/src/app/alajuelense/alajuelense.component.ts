import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
import { calendarioInterface } from '../calendario/calendarioInterface';
import { CalendarioService } from '../services/calendario.service';

@Component({
  selector: 'app-alajuelense',
  templateUrl: './alajuelense.component.html',
  styleUrls: ['./alajuelense.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AlajuelenseComponent implements OnInit {

  ldaInfo = [];
  ldaGoleo = [];
  public resultados : calendarioInterface[];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService : CalendarioService) { }

  ngOnInit() {
    this.teamService.getTeam('lda')
    .subscribe(
      res => this.ldaInfo = res,
      err => console.log(err)
    );

    console.log(JSON.stringify(this,  res => this.ldaInfo));                  // '{}'


    this.goleoService.getAllGoles()
    .subscribe(
      res => this.ldaGoleo = res,
      err => console.log(err)
    );

    this.resultService.getCalendario().subscribe(
      resultArray => this.resultados = resultArray
      , error => console.log("error: " + error)
    )

  }

}