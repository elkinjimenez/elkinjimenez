import { Component, ElementRef, ViewChild } from '@angular/core';

import Chart from 'chart.js/auto';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @ViewChild('java') javaCanvas!: ElementRef;

  ngAfterViewInit() {
    this.donaJava();
  }

  private donaJava() {
    const javaCtx = this.javaCanvas.nativeElement.getContext('2d') as CanvasRenderingContext2D;
    const myjava = new Chart(javaCtx, {
      type: 'doughnut',
      data: {
        labels: ['Conocimiento al', 'Por mejorar'],
        datasets: [{
          data: [80, 20],
          backgroundColor: ["#304ffe", "#212121"],
          hoverBackgroundColor: ["#0023eb", "#212121"]
        }]
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
  }

}
