import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-perez-zeledon',
  templateUrl: './perez-zeledon.component.html',
  styleUrls: ['./perez-zeledon.component.css']
})
export class PerezZeledonComponent implements OnInit {

  info = []

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamService.getTeam('pz')
    .subscribe(
      res => this.info = res,
      err => console.log(err)
    );
  }
}
