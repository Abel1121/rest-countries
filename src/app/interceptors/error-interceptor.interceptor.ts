import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { catchError, Observable } from 'rxjs';
import { ModalService } from '../services/modal.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private ms: ModalService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error, 'error');
        this.ms.showModal('WARNING', 'Backend communication problem');
        throw error;
      })
    );
  }
}
