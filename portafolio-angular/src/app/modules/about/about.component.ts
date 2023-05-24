import { Component, ElementRef, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @ViewChild('java') javaCanvas!: ElementRef;
  @ViewChild('javaScript') javaScriptCanvas!: ElementRef;
  @ViewChild('html') htmlCanvas!: ElementRef;
  @ViewChild('ux') uxCanvas!: ElementRef;
  @ViewChild('ui') uiCanvas!: ElementRef;
  @ViewChild('db') dbCanvas!: ElementRef;

  private labels = ['Conocimiento al', 'Por mejorar'];

  ngAfterViewInit() {
    this.printCharts();
  }

  private printCharts() {
    const charts: MyChart[] = [
      {
        canvas: this.javaCanvas,
        data: [80, 20],
        backgroundColor: ["#304ffe", "#212121"],
        hoverBackgroundColor: ["#0023eb", "#212121"]
      },
      {
        canvas: this.javaScriptCanvas,
        data: [72, 28],
        backgroundColor: ["#ffff00", "#212121"],
        hoverBackgroundColor: ["#dede23", "#212121"]
      },
      {
        canvas: this.htmlCanvas,
        data: [95, 5],
        backgroundColor: ["#00C851", "#212121"],
        hoverBackgroundColor: ["#068c3c", "#212121"]
      },
      {
        canvas: this.uxCanvas,
        data: [90, 10],
        backgroundColor: ["#2BBBAD", "#212121"],
        hoverBackgroundColor: ["#209186", "#212121"]
      },
      {
        canvas: this.uiCanvas,
        data: [93, 7],
        backgroundColor: ["#d50000", "#212121"],
        hoverBackgroundColor: ["#b71c1c", "#212121"]
      },
      {
        canvas: this.dbCanvas,
        data: [75, 25],
        backgroundColor: ["#aa00ff", "#212121"],
        hoverBackgroundColor: ["#4a148c", "#212121"]
      }
    ];
    charts.forEach(chart => {
      const dona = chart.canvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
      const myDona = new Chart(dona, {
        type: 'doughnut',
        data: {
          labels: this.labels,
          datasets: [chart]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false
            },
          }
        }
      });
    })
  }

}

interface MyChart {
  canvas: ElementRef;
  data: number[];
  backgroundColor: string[];
  hoverBackgroundColor: string[];
}