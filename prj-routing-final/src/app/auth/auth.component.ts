import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from './auth.service';

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

    this.isloading = true;
    if (this.isLogin) {
      // ...
    } else {
      this.authService.signup(email, pass).subscribe(resData => {
        console.log(resData);
        this.isloading = false;
      }, error => {
        this.isloading = false;
        this.error = 'An error occured';
        console.log(error);
      });
    }
    form.reset();
  }

}
