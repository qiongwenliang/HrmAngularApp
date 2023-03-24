import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor(private router:Router){ }

  logout(){
    if (localStorage.hasOwnProperty("token")){
      //in order to logout, we remove the token because we don't need it anymore
      localStorage.removeItem("token");
      //when the user logged out, redirect to login page again
      this.router.navigateByUrl("/login")
    }
  }

}
