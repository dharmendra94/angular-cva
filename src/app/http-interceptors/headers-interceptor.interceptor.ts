import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class HeadersInterceptorInterceptor implements HttpInterceptor {
  private isProduction: boolean = environment.production;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.isProduction) {
      request.headers.append('x-rapidapi-host', environment.nutritionApiHost);
      request.headers.append('x-rapidapi-key', environment.nutritionApiHost);
      request.headers.append('useQueryString', 'true');
    }

    return next.handle(request);
  }
}
