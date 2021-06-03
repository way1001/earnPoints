import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {AuthenticationService} from '../_service/authentication.service';
import { ToastService } from '../_service/toast.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService,
                private toastService: ToastService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.toastService.presentErrorToast('无效授权.');
                // this.authenticationService.logout();
                // location.reload(true);
            }

            const error = err.error.message || err.statusText;
            this.toastService.presentErrorToast(error);
            return throwError(error);
        }));
    }
}
