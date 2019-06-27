import { Injectable } from '@angular/core';
import { Employee } from './employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  employees = this.http.get<Employee[]>('/api/employees')
  employeesPerDepartment = this.http.get<Employee[]>('/api/employeesperdepartment')

  public addEmployee(newEmployee: Employee): void {
    this.employees = this.http.post<Employee[]>('/api/addemployee', newEmployee);
  }
}
