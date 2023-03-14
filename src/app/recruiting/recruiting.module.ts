import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruitingRoutingModule } from './recruiting-routing.module';
import { AddCandidateComponent } from './add-candidate/add-candidate.component';
import { ListCandidateComponent } from './list-candidate/list-candidate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CandidateService } from '../services/candidate.service';


@NgModule({
  declarations: [
    AddCandidateComponent,
    ListCandidateComponent
  ],
  imports: [
    CommonModule,
    RecruitingRoutingModule,
    ReactiveFormsModule
  ],
  providers:[CandidateService]// if add CandidateService here in the brackets, it's the same as addsingleton in the module, 
              // if do not want this service works within the whole module, then go to the specific component
})
export class RecruitingModule { }
