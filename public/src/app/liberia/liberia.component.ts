import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-liberia',
  templateUrl: './liberia.component.html',
  styleUrls: ['./liberia.component.css']
})
export class LiberiaComponent implements OnInit {
  liberiaInfo = [];
  liberiaGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.teamService.getTeam('lib')
      .subscribe(
        res => this.liberiaInfo = res,
        err => console.log(err)
      );

    console.log(JSON.stringify(this, res => this.liberiaInfo));

    this.goleoService.getGoles('LIB')
      .subscribe(
        res => this.liberiaGoleo = res,
        err => console.log(err)
      );
  }
}