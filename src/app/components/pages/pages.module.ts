import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboradsPageComponent } from './dashborads/dashborads.component';
import { MaterialModule } from 'src/app/material.module';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartDonaComponent } from '../shared/chart-dona/chart-dona.component';
import { ColumnChartComponent } from '../shared/column-chart/column-chart.component';



@NgModule({
  declarations: [
    DashboradsPageComponent,
    ChartDonaComponent,
    ColumnChartComponent,
  ],
  imports: [CommonModule, MaterialModule, NgApexchartsModule],
  exports: [DashboradsPageComponent],
})
export class PagesModule {}
