import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../services/calendario.service';
import { HttpModule } from '@angular/http';
import { calendarioInterface } from './calendarioInterface';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public calendarioInfo : calendarioInterface[];
  public temp : string;

  constructor(private service : CalendarioService) { }

  getCalendario(): void {
    this.service.getCalendario().subscribe(
      resultArray => this.calendarioInfo = resultArray
      , error => console.log("error: " + error)
    )
    console.log(this.calendarioInfo)
  }

  ngOnInit() {
    this.getCalendario();
  }

}
