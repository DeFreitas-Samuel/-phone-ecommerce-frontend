import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable } from 'rxjs';





@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = sessionStorage.getItem('access_token');

    if (accessToken) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
      });

      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
