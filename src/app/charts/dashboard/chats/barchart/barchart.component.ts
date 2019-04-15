
import { Component, Input, OnInit } from '@angular/core';

import { GoogleChartService } from '../../../services/charts/google-chart.service';
import { BarChartConfig } from '../../../models/charts.config';

declare var google: any;

@Component({
  selector: 'bar-chart',
  templateUrl: './barchart.component.html'
})
export class BarChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: BarChartConfig;
    @Input() elementId: string;

    constructor(private _chartService: GoogleChartService) {}

    ngOnInit(): void {
        this._chartService.BuildBarChart(this.elementId, this.data, this.config); 
    }
}