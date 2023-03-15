import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Candidate } from 'src/app/interface/candidate';
import { CandidateService } from 'src/app/services/candidate.service';

@Component({
  selector: 'app-add-candidate',
  templateUrl: './add-candidate.component.html',
  styleUrls: ['./add-candidate.component.scss']
})
export class AddCandidateComponent {

  candidate:Candidate = {
    id: 0,
    firstName: '',
    lastName: '',
    emailId: '', 
    mobile: '',
    resumeUrl: '',
    fileName: undefined
  }
  
  constructor(private fb:FormBuilder, private candidateService:CandidateService){ }

  addCandidateFormGroup=this.fb.group({
    firstName: new FormControl("", [Validators.required]),
    lastName: new FormControl("", [Validators.required]),
    emailId: new FormControl("", [Validators.required, Validators.email]),
    mobile: new FormControl(""),
    resumeUrl: new FormControl(""),
    fileName: new FormControl("")
  });

  //used to get the controls defined in addCandidateFormGroup, can display error message, a getter method must return something.
  //without using the getter method here, in html, the name tag will throw an error
  get firstName(){
    return this.addCandidateFormGroup.get('firstName')
  }

  get lastName(){
    return this.addCandidateFormGroup.get('lastName')
  }

  get emailId(){
    return this.addCandidateFormGroup.get('emailId')
  }

  get mobile(){
    return this.addCandidateFormGroup.get('mobile')
  }

  get resumeUrl(){
    return this.addCandidateFormGroup.get('resumeUrl')
  }

  saveCandidate(){
    //console.log(this.addCandidateFormGroup.value)

    //this.candidate.id = 0
    this.candidate.firstName = this.addCandidateFormGroup.value.firstName
    this.candidate.lastName = this.addCandidateFormGroup.value.lastName
    this.candidate.emailId = this.addCandidateFormGroup.value.emailId
    this.candidate.mobile = this.addCandidateFormGroup.value.mobile
    this.candidate.resumeUrl = this.addCandidateFormGroup.value.resumeUrl


    //this.candidate=this.addCandidateFormGroup.value

    //console.log(this.addCandidateFormGroup.value.resumeUrl)

    this.candidateService.saveCandidateToService(this.candidate).subscribe(()=>{
      //this subscribe to observable and returns a call back function
      //console.log(data);

      //JS alert
      alert("Candidate is saved")
      this.addCandidateFormGroup.reset()

    });

  }



  fileUpload(event:any){
    
  }
}
