import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //this is to read the token stored in the localstorage
    let token = localStorage.getItem("token")
    //once got the token, clone your request
    let req = request.clone(
      {
        setHeaders:{
          Authorization:"Bearer "+token
        }
      }
    );
    //pass to next interceptor or to the backend server
    return next.handle(req);
  }
}

