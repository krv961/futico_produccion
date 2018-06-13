<<<<<<< HEAD
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';
=======
import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
import { calendarioInterface } from '../calendario/calendarioInterface';
import { CalendarioService } from '../services/calendario.service';
>>>>>>> master

@Component({
  selector: 'app-herediano',
  templateUrl: './herediano.component.html',
  styleUrls: ['./herediano.component.css'],
  encapsulation: ViewEncapsulation.None
})

<<<<<<< HEAD
export class HeredianoComponent implements OnInit {
  heredianoInfo = [];
  heredianoGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
=======
  info = [];
  goleo = [];
  public resultados : calendarioInterface[];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService : CalendarioService) { }
>>>>>>> master

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.teamService.getTeam('csh')
<<<<<<< HEAD
      .subscribe(
        res => this.heredianoInfo = res,
        err => console.log(err)
      );

    console.log(JSON.stringify(this, res => this.heredianoInfo));

    this.goleoService.getGoles('CSH')
      .subscribe(
        res => this.heredianoGoleo = res,
        err => console.log(err)
      );
=======
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

>>>>>>> master
  }

}


