import {Component} from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLogin = false;

  onSwitchMode() {
    this.isLogin = !this.isLogin;
  }

}
