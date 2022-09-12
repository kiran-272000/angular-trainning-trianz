import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor', request);

    request = request.clone({
      setHeaders: {
        'api-key': 'kiran-test',
        'content-type': 'application/json',
      },
    });
    return next.handle(request);
  }
}
