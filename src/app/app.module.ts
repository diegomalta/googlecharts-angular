import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './charts/dashboard/dashboard.component';
import { PieChartComponent } from './charts/dashboard/chats/piechart.component';

import { GoogleChartsBaseService } from './charts/services/google-charts.base.service';
import { GooglePieChartService } from './charts/services/google-pie-chart.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GoogleChartsBaseService,GooglePieChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
