import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';
import { ResultadosService } from '../services/resultados.service';


@Component({
  selector: 'app-grecia',
  templateUrl: './grecia.component.html',
  styleUrls: ['./grecia.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GreciaComponent implements OnInit {

  info = [];
  goleo = [];
  resultados = [];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService: ResultadosService) { }


  getGoles() {
    this.goleoService.getAllGoles()
      .subscribe(
        res => this.goleo = res,
        err => console.log(err)
      );
  }

  getResultados() {
    this.resultService.getResults('gre')
      .subscribe(
        res => this.resultados = res,
        err => console.log(err)
      );
  }

  getInfo() {
    this.teamService.getTeam('gre')
      .subscribe(
        res => this.info = res,
        err => console.log(err)
      );
  }

  ngOnInit() {
    this.getGoles();
    this.getResultados();
    this.getInfo();

  }

}

