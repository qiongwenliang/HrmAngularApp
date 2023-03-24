import { Component, OnInit } from '@angular/core';
import { Candidate } from 'src/app/interface/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss']
})
export class ListCandidateComponent implements OnInit {

  constructor(private candidateService:CandidateService){}
  
  candidateCollections: Candidate[] = []

  ngOnInit(): void {
    this.candidateService.getAllCandidates().subscribe((data)=> {
      this.candidateCollections=data;
    }, (error)=>{
      console.log(error)
    })
  }

  deleteCandidate(id:number){
    if (confirm("Are you sure to delete candidate number" + id + "?")){
      this.candidateService.deleteCandidateById(id).subscribe(() => {
        window.location.reload();
      });
    }
  }

}
