import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from '../models/piechart.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  title = 'Pie Chart Sample';

  data: any[];
  config: PieChartConfig;
  elementId: String;

  constructor() { }

  ngOnInit() {
        // Data & Config
        this.data = [
        ['Day', 'Hours'],
        ['Sunday',3],
        ['Monday',3],
        ['Tuesday',2],
        ['Wednesday',5],
        ['Thursday',4],
        ['Friday', 8],
        ['Saturday', 10]];
    
        this.config = new PieChartConfig('Chart description', 0.4);
        this.elementId = 'myPieChart';
  }

}
