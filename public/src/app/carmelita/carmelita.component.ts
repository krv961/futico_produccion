import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-carmelita',
  templateUrl: './carmelita.component.html',
  styleUrls: ['./carmelita.component.css']
})
export class CarmelitaComponent implements OnInit {
carmelitaInfo = []
  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('carmelita')
    .subscribe(
      res => this.carmelitaInfo = res,
      err => console.log(err)
    );
  }


}
