import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-cartagines',
  templateUrl: './cartagines.component.html',
  styleUrls: ['./cartagines.component.css']
})
export class CartaginesComponent implements OnInit {
  cartagoInfo = [];
  cartagoGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //   this.dataSource.filter = filterValue;
  }
  ngOnInit() {
    this.teamService.getTeam('csc')
      .subscribe(
        res => this.cartagoInfo = res,
        err => console.log(err)
      );

    console.log(JSON.stringify(this, res => this.cartagoInfo));

    this.goleoService.getGoles('CSC')
      .subscribe(
        res => this.cartagoGoleo = res,
        err => console.log(err)
      );
  }
}