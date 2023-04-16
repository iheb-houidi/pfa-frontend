import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../Employee/employye';
import { environment } from '../environments/environment';

@Injectable({providedIn: 'root'})
export class EmployeeService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/api/employee/all`);
  }

  public addEmployee( employee :Employee ): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiServerUrl}/api/employee/add`, employee);
  }

  public updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiServerUrl}/api/employee/update`, employee);
  }

  public deleteEmployee(idEmploye: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/api/employee/delete/${idEmploye}`);
  }

  public Findemployee(idEmploye: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiServerUrl}/api/employee/find/${idEmploye}`);
  }
}


