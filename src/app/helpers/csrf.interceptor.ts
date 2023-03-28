import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpXsrfTokenExtractor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';




@Injectable()
export class CSRFInterceptor implements HttpInterceptor {
    constructor(private tokenExtractor: HttpXsrfTokenExtractor) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cookieheaderName = 'X-XSRF-TOKEN';
        let csrfToken = this.tokenExtractor.getToken() as string;
        if (csrfToken !== null && !req.headers.has(cookieheaderName)) {
            req = req.clone({ headers: req.headers.set(cookieheaderName, csrfToken) });
        }
        return next.handle(req);
    }
}