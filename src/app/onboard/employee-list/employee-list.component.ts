import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService:EmployeeService){}

  employeeCollections:Employee[]=[]

  ngOnInit(): void {
    this.employeeService.getAllEmployee().subscribe((data) => {
      this.employeeCollections=data
    })
  }


  deleteEmployeeById(id:number){
    if (confirm("Are you sure to delete Employee number " + id + "?")){
      this.employeeService.deleteEmployeeById(id).subscribe(() => {
        window.location.reload()
      })
    }
  }

}
