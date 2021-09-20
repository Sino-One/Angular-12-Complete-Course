import {Component, ComponentFactoryResolver, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthresponseData, AuthService} from './auth.service';
import {Observable, Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AlertComponent} from '../shared/alert/alert.component';
import {PlaceholderDirective} from '../shared/placeholder/placeholder.directive';
import {Store} from "@ngrx/store";
import * as fromApp from '../store/app.reducer';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy, OnInit {
  isLogin = false;
  isloading = false;
  error: string = null;
  @ViewChild(PlaceholderDirective, {static: false})
  alertHost: PlaceholderDirective;
  private closeSub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private CFResolver: ComponentFactoryResolver,
              private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.store.select('auth').subscribe(authState => {
      this.isloading = authState.loading;
      this.error = authState.authError;
      if ( this.error ) {
        this.showErrorAlert(this.error)
      }
    });
  }

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const pass = form.value.password;

    if (this.isLogin) {
    //  authObs = this.authService.login(email, pass);
      this.store.dispatch(new AuthActions.LoginStart({email: email, password: pass}));
    } else {
      this.store.dispatch(new AuthActions.SignupStart({email: email, password: pass}));
    }

    form.reset();
  }

  onHandleError() {
    this.error = null;
  }

  showErrorAlert(message: string) {
    // const alertCmp = new AlertComponent()
    const alertCmpfactory = this.CFResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertCmpfactory);

    componentRef.instance.message = message;
    this.closeSub = componentRef.instance.close.subscribe(() => {
      this.closeSub.unsubscribe();
      hostViewContainerRef.clear();
    });
  }

  ngOnDestroy() {
    if (this.closeSub) {
      this.closeSub.unsubscribe();
    }
  }

}
