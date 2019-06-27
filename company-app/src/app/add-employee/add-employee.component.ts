import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { DataService } from '../data.service';

@Component({
  selector: 'company-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public newEmployee: Employee;
  data: DataService;

  constructor(dataService : DataService) {
    this.data = dataService;
  }

  ngOnInit() {
    this.newEmployee = new Employee();
  }

  addEmployee(addForm) : void{
    if(addForm.valid){
      var employeeToAdd = this.newEmployee;
      this.newEmployee = new Employee();
      this.newEmployee.Salary = Number(this.newEmployee.Salary);
      this.data.addEmployee(employeeToAdd);
    } else {
      console.error("Add employee form is invalid");
    }
  }

}
