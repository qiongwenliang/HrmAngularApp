import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  saveUserToService(user:User){
    return this.http.post("http://localhost:57879/api/user", user);
  }

  getAllUser() : Observable<User[]>{
    return this.http.get<User[]>("http://localhost:57879/api/user")
  }

  deleteUserById(id:any){
    return this.http.delete("http://localhost:57879/api/user" + id)
  }

}
