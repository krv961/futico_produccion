import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  anotados: any;
  anotados1: any;

  recibidos: any;
  recibidos1: any;

  ganados: any;
  ganados1: any;

  perdidos: any;
  perdidos1: any;

  golesJornadas: any;
  golesJornadas1: any;

  ngAfterViewInit() {
    this.statGolesAnotados();
    this.statGolesRecibidos();
    this.partidosGanados();
    this.partidosPerdidos();
    this.golesJornada();
  }

  golesJornada() {
    this.golesJornadas = document.getElementById('goles');
    this.golesJornadas1 = this.golesJornadas.getContext('2d');
    let myChart = new Chart(this.golesJornadas1, {
      type: 'line',
      data: {
        labels: ["Jornada1", "Jornada2", "Jornada3", "Jornada4", "Jornada5", "Jornada6", "Jornada7",
         "Jornada8", "Jornada9", "Jornada10", "Jornada11", "Jornada12", "Jornada13", "Jornada14",
          "Jornada15", "Jornada16", "Jornada17", "Jornada18", "Jornada19", "Jornada20" , "Jornada21",
           "Jornada22"],
        datasets: [{
          label: '# goles por jornada',
          data: [14, 12, 11, 16, 12, 21, 15, 8, 12, 25, 15, 22, 14, 12, 16, 11, 21, 18, 17, 21, 22, 16],
          backgroundColor: [
            '#26a69a'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,

      }
    });
  }

  partidosPerdidos() {
    this.perdidos = document.getElementById('perdidos');
    this.perdidos1 = this.perdidos.getContext('2d');
    let myChart = new Chart(this.perdidos1, {
      type: 'doughnut',
      data: {
        labels: ["LDA", "SAP", "CSH", "SAN", "GRE", "LIM", "CSC", "GUA", "ADC", "PZ", "UCR", "LIB"],
        datasets: [{
          label: '# partidos ganados',
          data: [6, 5, 6, 8, 10, 8, 12, 7, 11, 8, 9, 13],
          backgroundColor: [
            '#61BEB5',
            '#4DB6AC',
            '#39AEA3',
            '#26A69A',
            '#23978C',
            '#20887F',
            '#1C7971',
            '#196A63',
            '#155B54',
            '#124C46',
            '#0E3D38',
            '#0B2E2A'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,

      }
    });
  }

  partidosGanados() {
    this.ganados = document.getElementById('ganados');
    this.ganados1 = this.ganados.getContext('2d');
    let myChart = new Chart(this.ganados1, {
      type: 'bar',
      data: {
        labels: ["LDA", "SAP", "CSH", "SAN", "GRE", "LIM", "CSC", "GUA", "ADC", "PZ", "UCR", "LIB"],
        datasets: [{
          label: '# partidos ganados',
          data: [16, 16, 16, 11, 6, 7, 1, 7, 7, 7, 6, 3],
          backgroundColor: [
            '#61BEB5',
            '#4DB6AC',
            '#39AEA3',
            '#26A69A',
            '#23978C',
            '#20887F',
            '#1C7971',
            '#196A63',
            '#155B54',
            '#124C46',
            '#0E3D38',
            '#0B2E2A'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,

      }
    });
  }

  statGolesAnotados() {
    this.anotados = document.getElementById('myChart');
    this.anotados1 = this.anotados.getContext('2d');
    let myChart = new Chart(this.anotados1, {
      type: 'pie',
      data: {
        labels: ["LDA", "SAP", "CSH", "SAN", "GRE", "LIM", "CSC", "GUA", "ADC", "PZ", "UCR", "LIB"],
        datasets: [{
          label: '% of Votes',
          data: [56, 56, 41, 35, 27, 31, 16, 28, 26, 27, 26, 18],
          backgroundColor: [
            '#61BEB5',
            '#4DB6AC',
            '#39AEA3',
            '#26A69A',
            '#23978C',
            '#20887F',
            '#1C7971',
            '#196A63',
            '#155B54',
            '#124C46',
            '#0E3D38',
            '#0B2E2A'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,

      }
    });
  }

  statGolesRecibidos() {
    this.recibidos = document.getElementById('recibidos');
    this.recibidos1 = this.recibidos.getContext('2d');
    let myChart = new Chart(this.recibidos1, {
      type: 'bar',
      data: {
        labels: ["LDA", "SAP", "CSH", "SAN", "GRE", "LIM", "CSC", "GUA", "ADC", "PZ", "UCR", "LIB"],
        datasets: [{
          label: '# goles recibidos',
          data: [33, 29, 21, 29, 34, 31, 32, 32, 39, 32, 32, 44],
          backgroundColor: [
            '#61BEB5',
            '#4DB6AC',
            '#39AEA3',
            '#26A69A',
            '#23978C',
            '#20887F',
            '#1C7971',
            '#196A63',
            '#155B54',
            '#124C46',
            '#0E3D38',
            '#0B2E2A'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: false,

      }
    });
  }

}
