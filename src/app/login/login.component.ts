import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthenticationService]
})
export class LoginComponent {
  //this is used for property binding in login.html
  login={
    username:'',
    password:''
  }

  //in constructor to inject services
  //router is for redirecting current page to another
  constructor(private authService:AuthenticationService, private router:Router){  }

  data:any

  loginUser(loginForm:NgForm){
    this.authService.loginToService(loginForm.value).subscribe((d)=>{
      console.log(d)
      this.data=d
      //this is to store token in localstorage
      localStorage.setItem("token", this.data.token)
      //here after getting the token, we can direct user to the home page
      this.router.navigateByUrl('')
    });
  }
}
