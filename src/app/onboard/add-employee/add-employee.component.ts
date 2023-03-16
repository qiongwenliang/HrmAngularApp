import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/interface/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  employee: Employee={
    id: 0,
    firstName: '',
    lastName: '',
    middleName: '',
    ssn: 0,
    hireDate: null,
    endDate: null,
    employeeCategoryId: 0,
    employeeStatusId: 0,
    address: '',
    emailAddress: '',
    employeeRoleId: 0
  }

  constructor(private fb:FormBuilder, private employeeService:EmployeeService){}

  addEmployeeFormGroup=this.fb.group({
    firstName: new FormControl("",[Validators.required]),
    lastName: new FormControl("",[Validators.required]),
    middleName: new FormControl(""),
    ssn: new FormControl(),
    hireDate: new FormControl(null),
    endDate: new FormControl(null),
    employeeCategoryId: new FormControl(),
    employeeStatusId: new FormControl(),
    address: new FormControl(""),
    emailAddress: new FormControl("", [Validators.required, Validators.email]),
    employeeRoleId: new FormControl(),
  })

  get firstName(){
    return this.addEmployeeFormGroup.get("firstName")
  }

  get lastName(){
    return this.addEmployeeFormGroup.get("lastName")
  }

  get middleName(){
    return this.addEmployeeFormGroup.get("middleName")
  }

  get ssn(){
    return this.addEmployeeFormGroup.get("ssn")
  }

  get hireDate(){
    return this.addEmployeeFormGroup.get("hireDate")
  }

  get endDate(){
    return this.addEmployeeFormGroup.get("endDate")
  }

  get employeeCategoryId(){
    return this.addEmployeeFormGroup.get("employeeCategoryId")
  }

  get employeeStatusId(){
    return this.addEmployeeFormGroup.get("employeeStatusId")
  }

  get address(){
    return this.addEmployeeFormGroup.get("address")
  }

  get emailAddress(){
    return this.addEmployeeFormGroup.get("emailAddress")
  }

  get employeeRoleId(){
    return this.addEmployeeFormGroup.get("employeeRoleId")
  }

  saveEmployee(){
    this.employee.firstName=this.addEmployeeFormGroup.value.firstName
    this.employee.lastName=this.addEmployeeFormGroup.value.lastName
    this.employee.middleName=this.addEmployeeFormGroup.value.middleName
    this.employee.ssn=this.addEmployeeFormGroup.value.ssn
    this.employee.hireDate=this.addEmployeeFormGroup.value.hireDate
    this.employee.endDate=this.addEmployeeFormGroup.value.endDate
    this.employee.employeeCategoryId=this.addEmployeeFormGroup.value.employeeCategoryId
    this.employee.employeeStatusId=this.addEmployeeFormGroup.value.employeeStatusId
    this.employee.address=this.addEmployeeFormGroup.value.address
    this.employee.emailAddress=this.addEmployeeFormGroup.value.emailAddress        
    this.employee.employeeRoleId=this.addEmployeeFormGroup.value.employeeRoleId

    this.employeeService.saveEmployeeToService(this.employee).subscribe(()=>{
      alert("Employee is saved")
      this.addEmployeeFormGroup.reset()
    });  
  }

}
