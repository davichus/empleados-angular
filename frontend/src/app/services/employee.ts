import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee as EmployeeModel } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class Employee {
  URL_API = 'http://localhost:4000/api/employees';
  employees: EmployeeModel[] = [];
  constructor(private http: HttpClient) { }

  getEmployees() {
    return this.http.get<EmployeeModel[]>(this.URL_API);
  }
}
