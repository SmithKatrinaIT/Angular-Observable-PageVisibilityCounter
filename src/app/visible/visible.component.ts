import { Component, Input, OnDestroy, OnInit, Output, EventEmitter} from '@angular/core';
import  Chart  from 'chart.js/auto';
import { default as Annotation } from 'chartjs-plugin-annotation';
import { format, parseISO } from 'date-fns';
import { ElaspedTimeService } from '../services/elasped-time.service';



@Component({
  selector: 'app-visible',
  templateUrl: './visible.component.html',
  styleUrls: ['./visible.component.css']
})


export class VisibleComponent implements OnInit {

  //chart properties
  myChart: any = [];
  randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

  /** Data set for Today */
  today: any = [
    { x: '2023-11-16T10:47:00', y: 28 },
    { x: '2023-11-16T11:00:00', y: 0 },
    { x: '2023-11-16T12:55:00', y: 30 },
    { x: '2023-11-16T13:11:00', y: 35 },
    { x: '2023-11-16T14:15:00', y: null },
    { x: '2023-11-16T15:00:00', y: 17 },
    { x: '2023-11-16T16:23:00', y: 45 },
    { x: '2023-11-16T17:23:00', y: 31 },
    { x: '2023-11-16T18:23:00', y: 31 },
  ];

  past3day: any = [
    { x: '2023-11-16T08:47:00', y: 38 },
    { x: '2023-11-16T09:00:00', y: 15 },
    { x: '2023-11-16T10:55:00', y: 60 },
    { x: '2023-11-16T13:25:00', y: 55 },
    { x: '2023-11-16T14:58:00', y: 45 },
    { x: '2023-11-17T15:00:00', y: 37 },
    { x: '2023-11-17T15:45:00', y: 47 },
    { x: '2023-11-17T15:50:00', y: 33 },
    { x: '2023-11-17T18:16:00', y: 41 },
    { x: '2023-11-17T18:55:00', y: null },
    { x: '2023-11-17T19:05:00', y: 38 },
    { x: '2023-11-18T09:15:00', y: null },
    { x: '2023-11-18T10:00:00', y: 17 },
    { x: '2023-11-18T11:23:00', y: 45 },
    { x: '2023-11-18T14:45:00', y: 32 },
    { x: '2023-11-18T16:00:00', y: 41 },
    { x: '2023-11-18T16:55:00', y: null},
    { x: '2023-11-18T20:30:00', y: 35 },
    { x: '2023-11-18T21:15:00', y: 31 },
    { x: '2023-11-18T23:00:00', y: 34 },
  ];

  /** Options properties */
  scales: any = {
    x: {
      ticks: {
        callback: function(value, index, ticks) {
          return index % 2 === 0 ? format(parseISO(this.getLabelForValue(index)), "MM/dd = hh:mm aaaaa'm'") : "";
        }
      }
    },
    y: {
      beginAtZero: true
    }
  }

  /** Chart Options */
  options: any = {
    //maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      annotation: {
        annotations: {
          offline: {
            adjustScaleRange: true,
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            scaleID: 'x',
            value: 4,
            borderColor: 'blue',
            borderWidth: 5,
            label: {
              display: true,
              content: 'Offline',
            }
          },
          offline2: {
            adjustScaleRange: true,
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            scaleID: 'x',
            value: 18,
            borderColor: 'red',
            borderWidth: 5,
            label: {
              display: true,
              content: 'Offline',
            }
          },
          offline3: {
            adjustScaleRange: true,
            drawTime: 'afterDatasetsDraw',
            type: 'line',
            scaleID: 'x',
            value: 20,
            borderColor: 'red',
            borderWidth: 5,
            label: {
              display: true,
              content: 'Offline',
              rotation: -90,
              position: 'start'
            }
          }
        }
      }
    },

  }


  /** Chart Render Function/Block */
  createChart() {

    this.myChart = new Chart('chartContainer', {
      type: 'line',
      data: {
        datasets: [
          {
            label: 'poc',
            data: this.today,
            borderWidth: 1,
            spanGaps: false,
            borderColor: 'this.randomColor'
          },
          {
            label: 'second line',
            data: this.past3day,
            borderWidth: 1,
            spanGaps: false,
            borderColor: this.randomColor
          }
        ]
      },
      options: this.options

    });
  }

  constructor() {
  }


  ngOnInit() {
    /** render Chart */
    Chart.register(Annotation );
    this.createChart();
  }
}


