import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../interface/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  saveEmployeeToService(employee:Employee){
    return this.http.post("http://localhost:7293/api/employee", employee);
  }

  getAllEmployee():Observable<Employee[]>{
    return this.http.get<Employee[]>("http://localhost:7293/api/employee")
  }

  deleteEmployeeById(id:any){
    return this.http.delete("http://localhost:7293/api/employee"+id)
  }
}
