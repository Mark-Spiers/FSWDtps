import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

import { HttpClientModule } from '@angular/common/http';
import { NameDirective } from './name.directive';
import { AddressDirective } from './address.directive';
import { PiechartComponent } from './piechart/piechart.component';
import { NinuniqueDirective } from './ninunique.directive';
import { EmployeeDepartmentComponent } from './employee-department/employee-department.component';
import { DepartmentNavbarComponent } from './department-navbar/department-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    AddEmployeeComponent,
    NameDirective,
    AddressDirective,
    PiechartComponent,
    NinuniqueDirective,
    EmployeeDepartmentComponent,
    DepartmentNavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
