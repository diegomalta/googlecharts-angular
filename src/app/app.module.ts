import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//flexlayout
import { FlexLayoutModule } from "@angular/flex-layout"

import { DashboardComponent } from './charts/dashboard/dashboard.component';
import { PieChartComponent } from './charts/dashboard/chats/piechart/piechart.component';
import { BarChartComponent } from './charts/dashboard/chats/barchart/barchart.component';

import { GoogleChartsBaseService } from './charts/services/charts/google-charts.base.service';
import { GoogleChartService } from './charts/services/charts/google-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule
  ],
  providers: [GoogleChartsBaseService,GoogleChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
