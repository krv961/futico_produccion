import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
import { calendarioInterface } from '../calendario/calendarioInterface';
import { CalendarioService } from '../services/calendario.service';

@Component({
  selector: 'app-saprissa',
  templateUrl: './saprissa.component.html',
  styleUrls: ['./saprissa.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SaprissaComponent implements OnInit {

  info = [];
  goleo = [];
  public resultados : calendarioInterface[];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService : CalendarioService) { }

  ngOnInit() {
    this.teamService.getTeam('sap')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );

    console.log(JSON.stringify(this,  res => this.info));                  // '{}'


    this.goleoService.getAllGoles()
    .subscribe(
      res => this.goleo = res,
      err => console.log(err)
    );

    this.resultService.getCalendario().subscribe(
      resultArray => this.resultados = resultArray
      , error => console.log("error: " + error)
    )

  }

}
