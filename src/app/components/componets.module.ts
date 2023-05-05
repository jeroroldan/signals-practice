import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './ui/sidenav/sidenav.component';
import { MaterialModule } from '../material.module';
import { TableComponent } from './shared/table/table.component';



@NgModule({
  declarations: [
    SidenavComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    SidenavComponent,
  ]
})
export class ComponetsModule { }
