import { Component } from '@angular/core';
import { Employee as EmployeeService } from '../../services/employee';

@Component({
  selector: 'app-employee',
  standalone: false,
  templateUrl: './employee.html',
  styleUrl: './employee.css'
})
export class Employee {
  constructor(public employeeService: EmployeeService) { }
  ngOnInit(){
    console.log('Employee component loaded');
    console.log(this.employeeService.getEmployees());
  }
}
