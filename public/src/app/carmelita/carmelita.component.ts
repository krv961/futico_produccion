import { Component, OnInit, ViewEncapsulation} from '@angular/core';
import { TeamService } from '../team.service';
import { GoleoService } from '../services/goleo.service';

@Component({
  selector: 'app-carmelita',
  templateUrl: './carmelita.component.html',
  styleUrls: ['./carmelita.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CarmelitaComponent implements OnInit {
carmelitaInfo = [];
carmelitaGoleo = [];
  constructor(private teamService: TeamService, private goleoService: GoleoService) { }

  ngOnInit() {
    this.teamService.getTeam('carmelita')
    .subscribe(
      res => this.carmelitaInfo = res,
      err => console.log(err)
    );

    console.log(JSON.stringify(this,  res => this.carmelitaInfo));                  // '{}'


    this.goleoService.getGoles('ADC')
    .subscribe(      
      res => this.carmelitaGoleo = res,
      err => console.log(err)
    );

  }


}
