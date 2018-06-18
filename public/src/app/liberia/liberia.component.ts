import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
import { calendarioInterface } from '../calendario/calendarioInterface';
import { CalendarioService } from '../services/calendario.service';
import { ResultadosService } from '../services/resultados.service';

@Component({
  selector: 'app-liberia',
  templateUrl: './liberia.component.html',
  styleUrls: ['./liberia.component.css']
})
export class LiberiaComponent implements OnInit {

  info = [];
  goleo = [];
  resultados = [];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService : ResultadosService) { }

    getGoles() {
      this.goleoService.getAllGoles()
        .subscribe(
          res => this.goleo = res,
          err => console.log(err)
        );
    }
  
    getResultados() {
      this.resultService.getResults('lib')
        .subscribe(
          res => this.resultados = res,
          err => console.log(err)
        );
    }
  
    getInfo() {
      this.teamService.getTeam('lib')
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

