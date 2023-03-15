import { Component, OnInit } from '@angular/core';
import { Interviews } from 'src/app/interface/Interviews';
import { InterviewsService } from 'src/app/services/interviews.service';

@Component({
  selector: 'app-list-interview',
  templateUrl: './list-interview.component.html',
  styleUrls: ['./list-interview.component.scss']
})
export class ListInterviewComponent implements OnInit{

  constructor(private interviewsService:InterviewsService){}

  interviewsCollections: Interviews[]= []

  ngOnInit(): void {
    this.interviewsService.getAllInterviews().subscribe((data) => {
      this.interviewsCollections=data
    })
  }

  deleteInterviews(id:number){
    if (confirm("Are you sure to delete Interview number " + id + "?")){
      this.interviewsService.deleteInterviewsById(id).subscribe(() => {
        window.location.reload()
      })
    }
  }
}
