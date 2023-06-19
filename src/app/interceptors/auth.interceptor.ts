import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // console.log(request);
    let xApiKey = localStorage.getItem('XApiKey');
    if (!xApiKey)
    {
      xApiKey = (Math.random() + 1).toString(20).substring(2);
      localStorage.setItem('XApiKey', xApiKey);
    }

    return next.handle(request.clone({setHeaders : {"xAPIKey": xApiKey}}));
  }
}
