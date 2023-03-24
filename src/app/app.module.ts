import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterlayoutComponent } from './layout/masterlayout/masterlayout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { InterviewModule } from './interview/interview.module';
import { RecruitingModule } from './recruiting/recruiting.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OnboardModule } from './onboard/onboard.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { HeadersInterceptor } from './interceptors/headers.interceptor';
import { AuthGuard } from './Guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MasterlayoutComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InterviewModule,
    RecruitingModule,
    ReactiveFormsModule,
    HttpClientModule,
    OnboardModule,
    AuthenticationModule,
    FormsModule
  ],
  providers: [
    //inject interceptor service, by creating an object
    {provide:HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi:true},
    //guards are services
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
