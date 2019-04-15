import { GoogleChartsBaseService } from './google-charts.base.service';
import { Injectable } from '@angular/core';
import { PieChartConfig, BarChartConfig } from '../../models/charts.config';

declare var google: any;

@Injectable()
export class GoogleChartService extends GoogleChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }


  public BuildBarChart(elementId: string, data: any[], config: BarChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.ColumnChart(document.getElementById(elementId)); };
    var options = {
                  title: config.title,
                  hAxis: config.hAxis,
                  vAxis: config.vAxis
        };

    this.buildChart(data, chartFunc, options);
  }


}