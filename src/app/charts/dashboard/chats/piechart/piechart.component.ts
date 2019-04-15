
import { Component, Input, OnInit } from '@angular/core';

import { GoogleChartService } from '../../../services/charts/google-chart.service';
import { PieChartConfig } from '../../../models/charts.config';

declare var google: any;

@Component({
  selector: 'pie-chart',
  templateUrl: './piechart.component.html'
})
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: string;

    constructor(private _pieChartService: GoogleChartService) {}

    ngOnInit(): void {
        this._pieChartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}