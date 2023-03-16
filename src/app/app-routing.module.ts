import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterlayoutComponent } from './layout/masterlayout/masterlayout.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', component:MasterlayoutComponent, //make it load masterlayout component by default
    children: [
      {path:'recruiting', loadChildren:()=> import('./recruiting/recruiting.module').then(x => x.RecruitingModule)},
      {path:'interview', loadChildren:() => import('./interview/interview.module').then(x => x.InterviewModule)},
      {path:'onboard', loadChildren:() => import('./onboard/onboard.module').then(x => x.OnboardModule)},
      {path:'authentication', loadChildren:() => import('./authentication/authentication.module').then(x => x.AuthenticationModule)}
    ]  
  },
  {path:'login', component:LoginComponent},
  {path:'**', component:PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
