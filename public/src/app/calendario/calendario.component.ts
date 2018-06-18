import { Component, OnInit } from '@angular/core';
import { CalendarioService } from '../services/calendario.service';
import { HttpModule } from '@angular/http';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  public calendarioInfo = [];

  constructor(private service : CalendarioService) { }

  getCalendario(): void {
    this.service.getCalendario().subscribe(
      res => this.calendarioInfo = res,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.getCalendario();
  }

}
