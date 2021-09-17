import * as AuthActions from './auth.actions';
import {Actions, ofType} from '@ngrx/effects';

export class AuthEffects {

  authLogin = this.actions$.pipe(
    ofType(AuthActions.LOGIN_START)
  );

  constructor(private actions$: Actions) { // Dollar sign because is Observable
  }
}
