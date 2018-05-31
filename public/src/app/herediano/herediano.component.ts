import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-herediano',
  templateUrl: './herediano.component.html',
  styleUrls: ['./herediano.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HeredianoComponent implements OnInit {
  heredianoInfo = [];
  heredianoGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.teamService.getTeam('csh')
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
  }
}
