import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest <any>, next: HttpHandler): Observable <HttpEvent<any>> {
    console.log('request intercepted !');
    // Clone the request to add the new header
    const clonedRequest = req.clone({
      headers: req
        .headers
        .set('Authorization', `Bearer ${environment.client_id}`)
    });

    // Pass the cloned request instead of the original request to the next handle
    return next.handle(clonedRequest);
  }
}
