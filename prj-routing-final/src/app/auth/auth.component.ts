import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthresponseData, AuthService} from './auth.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLogin = false;
  isloading = false;
  error: string = null;

  constructor(private authService: AuthService) {
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

    let authObs: Observable<AuthresponseData>;

    this.isloading = true;
    if (this.isLogin) {
      authObs = this.authService.login(email, pass);
    } else {
      authObs = this.authService.signup(email, pass);
    }

    authObs.subscribe(resData => {
      console.log(resData);
      this.isloading = false;
    }, error => {
      this.isloading = false;
      this.error = error;
      console.log(error);
    });

    form.reset();
  }

}
