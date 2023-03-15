import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Candidate } from '../interface/candidate';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
//by only using this injectable decorator, this class will act as a service.

export class CandidateService {

  constructor(private http:HttpClient) { }


  // //example of observable
  // saveCandidateToService(candidate:Candidate):Observable<string>
  // {
  //   console.log(candidate)
  //   return of("candidate is saved in database");
  //   //you can convert anything into observable by using of method
  // }


  saveCandidateToService(candidate:Candidate){
      return this.http.post("http://localhost:57880/api/candidate", candidate);
  }
  //to get the candidate information, this automatically returns observable


  //examples of not using subscribe below
  // students:string[]=[
  //   "Chang", "Zirui", "Yitong", "Helen"
  // ]

  // getStudent():Observable<string[]>{
  //   return of(this.students);
  // }


  getAllCandidates():Observable<Candidate[]>{
    return this.http.get<Candidate[]>("http://localhost:57880/api/candidate"); 
  }

  deleteCandidateById(id:any){
    return this.http.delete("http://localhost:57880/api/candidate/"+id)
  }

}
