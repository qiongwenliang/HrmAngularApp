import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { Interviews } from 'src/app/interface/Interviews';

@Component({
  selector: 'app-add-interview',
  templateUrl: './add-interview.component.html',
  styleUrls: ['./add-interview.component.scss']
})
export class AddInterviewComponent {
  interviews:Interviews = {
    id: 0,
    recruiterId: undefined,
    submissionId: undefined,
    interviewTypeId: undefined,
    interviewRound: undefined,
    scheduledOn: undefined,
    interviewerId: undefined,
    interviewFeedbackId: undefined
  }
  
  constructor(private fb:FormBuilder){ }

  addInterviewsFormGroup = this.fb.group({
    recruiterId : new FormControl(),
    submissionId: new FormControl(),
    interviewTypeId : new FormControl(),
    interviewRound: new FormControl(),
    scheduledOn: new FormControl(),
    interviewerId: new FormControl(),
    interviewFeedbackId: new FormControl()
  });


  get recruiterId(){
    return this.addInterviewsFormGroup.get("recruiterId")
  }

  get submissionId(){
    return this.addInterviewsFormGroup.get("submissionId")
  }

  get interviewTypeId(){
    return this.addInterviewsFormGroup.get("interviewTypeId")
  }

  get interviewRound(){
    return this.addInterviewsFormGroup.get("interviewRound")
  }

  get scheduledOn(){
    return this.addInterviewsFormGroup.get("scheduledOn")
  }

  get interviewerId(){
    return this.addInterviewsFormGroup.get("interviewerId")
  }

  get interviewFeedbackId(){
    return this.addInterviewsFormGroup.get("interviewFeedbackId")
  }

  saveInterview(){
    this.interviews.recruiterId = this.addInterviewsFormGroup.value.recruiterId
    this.interviews.submissionId = this.addInterviewsFormGroup.value.submissionId
    this.interviews.interviewTypeId = this.addInterviewsFormGroup.value.interviewTypeId
    this.interviews.interviewRound = this.addInterviewsFormGroup.value.interviewRound
    this.interviews.interviewerId = this.addInterviewsFormGroup.value.interviewerId
    this.interviews.scheduledOn = this.addInterviewsFormGroup.value.scheduledOn
    this.interviews.interviewFeedbackId = this.addInterviewsFormGroup.value.interviewFeedbackId
  }
}
