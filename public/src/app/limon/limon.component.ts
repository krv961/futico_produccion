import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import {MatTableDataSource} from '@angular/material';
<<<<<<< HEAD


=======
import { calendarioInterface } from '../calendario/calendarioInterface';
import { CalendarioService } from '../services/calendario.service';
>>>>>>> master

@Component({
  selector: 'app-limon',
  templateUrl: './limon.component.html',
  styleUrls: ['./limon.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LimonComponent implements OnInit {

<<<<<<< HEAD
  limonInfo = [];
limonGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];
  // dataSource = new MatTableDataSource(ELEMENT_DATA);
  // dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
 //   this.dataSource.filter = filterValue;
  }
=======
  info = [];
  goleo = [];
  public resultados : calendarioInterface[];

  constructor(private teamService: TeamService, private goleoService: GoleoService,
    private resultService : CalendarioService) { }
>>>>>>> master

  ngOnInit() {
    
    this.teamService.getTeam('lim')
    .subscribe(
      res => this.limonInfo = res,
      err => console.log(err)
    );

<<<<<<< HEAD
    console.log(JSON.stringify(this,  res => this.limonInfo));                  // '{}'


    this.goleoService.getGoles('LIM')
    .subscribe(
      res => this.limonGoleo = res,
      err => console.log(err)
    );

=======
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


