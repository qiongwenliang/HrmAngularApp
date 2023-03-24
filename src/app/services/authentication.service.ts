import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private httpClient:HttpClient) { }

  loginToService(loginCredentials:any){
    //automatically return observables
    return this.httpClient.post("http://localhost:7292/api/account", loginCredentials);
  }


  

}
