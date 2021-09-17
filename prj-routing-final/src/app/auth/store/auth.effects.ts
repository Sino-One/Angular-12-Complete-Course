import * as AuthActions from './auth.actions';
import {Actions, ofType, Effect} from '@ngrx/effects';
import {catchError, switchMap, map} from 'rxjs/operators';
import {AuthresponseData} from "../auth.service";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";

export interface AuthresponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class AuthEffects {
  @Effect()
  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START),
    switchMap((authData: AuthActions.LoginStart) => {
      return this.http.post<AuthresponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAOecvVFggXeJvRBmYNSMA3eW9fxdRLiT0',
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true
        }).pipe(catchError(error => {
          // ...
        of();
      }), map(resData => {
        of();
      }));
    }),

  );

  constructor(private actions$: Actions, private http: HttpClient) { // Dollar sign because is Observable
  }
}
