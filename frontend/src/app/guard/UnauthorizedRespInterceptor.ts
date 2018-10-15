import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Authenticate} from '../authentication/authenticate';
import {catchError} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class UnauthorizedRespInterceptor implements HttpInterceptor {

  constructor(private authService: Authenticate) {
  }

  /**
   * Intercept every http request. If the response is 401, logout the user...
   * @param req
   * @param next
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        console.log('***NOT AUTHORIZED***');
        this.authService.logOut();
        location.reload(true);
      }
      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

}
