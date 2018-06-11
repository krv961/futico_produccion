import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';
import { MatTableDataSource } from '@angular/material';


@Component({
  selector: 'app-guadalupe',
  templateUrl: './guadalupe.component.html',
  styleUrls: ['./guadalupe.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GuadalupeComponent implements OnInit {
  guadalupeInfo = [];
  guadalupeGoleo = [];

  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  displayedColumns = ['position', 'name', 'weight', 'symbol'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    //   this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.teamService.getTeam('gfc')
      .subscribe(
        res => this.guadalupeInfo = res,
        err => console.log(err)
      );

    console.log(JSON.stringify(this, res => this.guadalupeInfo));

    this.goleoService.getGoles('GFC')
      .subscribe(
        res => this.guadalupeGoleo = res,
        err => console.log(err)
      );
  }
}
