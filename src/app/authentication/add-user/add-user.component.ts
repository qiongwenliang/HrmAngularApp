import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  user: User = {
    id: 0,
    employeeId: undefined,
    emailId: undefined,
    roleId: undefined,
    firstName: undefined,
    lastName: undefined,
    hashPassword: undefined,
    salt: undefined
  }
  
  constructor(private fb:FormBuilder, private userService:UserService){}

  addUserFormGroup=this.fb.group({
    employeeId: new FormControl(),
    emailId: new FormControl(""),
    roleId: new FormControl(),
    firstName: new FormControl(""),
    lastName: new FormControl(""),
    hashPassword: new FormControl(""),
    salt: new FormControl("")
  })

  get employeeId(){
    return this.addUserFormGroup.get("employeeId")
  }

  get emailId(){
    return this.addUserFormGroup.get("emailId")
  }

  get roleId(){
    return this.addUserFormGroup.get("roldId")
  }

  get firstName(){
    return this.addUserFormGroup.get("firstName")
  }

  get lastName(){
    return this.addUserFormGroup.get("lastName")
  }

  get hashPassword(){
    return this.addUserFormGroup.get("hashPassword")
  }

  get salt(){
    return this.addUserFormGroup.get("salt")
  }


  saveUser(){
    this.user.employeeId=this.addUserFormGroup.value.employeeId
    this.user.emailId=this.addUserFormGroup.value.emailId
    this.user.roleId=this.addUserFormGroup.value.roleId
    this.user.firstName=this.addUserFormGroup.value.firstName
    this.user.lastName=this.addUserFormGroup.value.lastName
    this.user.hashPassword=this.addUserFormGroup.value.hashPassword
    this.user.salt=this.addUserFormGroup.value.salt

    this.userService.saveUserToService(this.user).subscribe(() => {
      alert("User is added")
      this.addUserFormGroup.reset()
    });
  }


}
