import { Component, OnInit } from '@angular/core';
import { PieChartConfig, BarChartConfig } from '../models/charts.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  title = 'Google Chart Sample';

  data: any[];
  config: PieChartConfig;
  elementId: String;

  config1: PieChartConfig;
  elementId1: String;
  
  config2: BarChartConfig;
  elementId2: String;

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
    
        this.config = new PieChartConfig('First Chart description', 0.4);
        this.elementId = 'myPieChart';
        
        // second chart
        this.config1 = new PieChartConfig('Second Chart description', 0.1);
        this.elementId1 = 'myPieChar1'

        // third char
        var hAxis = {
          title: 'Day of week',
        };
        var vAxis = {
          title: 'Hours',
        };
        this.config2 = new BarChartConfig('Third Chart description', hAxis, vAxis);
        this.elementId2 = 'myPieChar2'
  }

}
