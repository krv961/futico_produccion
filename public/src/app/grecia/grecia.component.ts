import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-grecia',
  templateUrl: './grecia.component.html',
  styleUrls: ['./grecia.component.css']
})
export class GreciaComponent implements OnInit {

  greciaInfo = []
  constructor(private teamService : TeamService) { }

  ngOnInit() {
  }

}
