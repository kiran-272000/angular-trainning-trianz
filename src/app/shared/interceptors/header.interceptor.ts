import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/user/services/auth.service';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('interceptor', request);

    request = request.clone({
      setHeaders: {
        'api-key': this.authService.userId,
        // 'content-type': 'application/json',
      },
    });
    return next.handle(request);
  }
}
