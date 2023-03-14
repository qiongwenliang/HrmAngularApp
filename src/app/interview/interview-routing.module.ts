import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInterviewComponent } from './add-interview/add-interview.component';
import { ListInterviewComponent } from './list-interview/list-interview.component';

const routes: Routes = [
  {path:'add', component:AddInterviewComponent},
  {path:'list', component:ListInterviewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InterviewRoutingModule { }
