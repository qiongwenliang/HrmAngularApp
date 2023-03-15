import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { ListInterviewComponent } from './list-interview/list-interview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterviewsService } from '../services/interviews.service';


@NgModule({
  declarations: [
    AddInterviewComponent,
    ListInterviewComponent
  ],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    ReactiveFormsModule
  ],
  providers:[InterviewsService]
})
export class InterviewModule { }
