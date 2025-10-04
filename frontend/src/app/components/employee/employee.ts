import { Component } from '@angular/core';
import { Employee as EmployeeService } from '../../services/employee';
import { errorContext } from 'rxjs/internal/util/errorContext';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  constructor(public employeeService: EmployeeService) { }
  ngOnInit(){
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employeeService.employees = res;
        console.log(this.employeeService.employees);
      },
      err => console.error(err)
    );
  }
}
