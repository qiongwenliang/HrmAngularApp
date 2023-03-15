import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interviews } from '../interface/Interviews';

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  constructor(private http:HttpClient) { }

  getAllInterviews(): Observable<Interviews[]>{
    return this.http.get<Interviews[]>("http://localhost:57877/api/interviews")
  }

  deleteInterviewsById(id:any){
    return this.http.delete<Interviews[]>("http://localhost:57877/api/interviews"+id)
  }
}
