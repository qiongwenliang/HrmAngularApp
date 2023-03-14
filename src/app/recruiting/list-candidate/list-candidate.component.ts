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
  ngOnInit(): void {
    this.candidateService.getAllCandidates().subscribe((data)=> {
      this.candidateCollections=data;
    })
  }
  candidateCollections: Candidate[] = []

  deleteCandidate(id:number){
    if (confirm("Are you sure to delete candidate number" + id )){
      this.candidateService.deleteCandidateById(id).subscribe(() => {
        window.location.reload();
      });
    }
  }

}
