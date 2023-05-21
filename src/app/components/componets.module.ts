import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './ui/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { TableComponent } from './shared/table/table.component';
import { PagesModule } from './pages/pages.module';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [SidenavComponent, TableComponent],
  imports: [CommonModule, MaterialModule, NgApexchartsModule,PagesModule],
  exports: [SidenavComponent],
})
export class ComponetsModule {}
