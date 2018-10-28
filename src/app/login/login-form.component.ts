import { Component } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  constructor(private loginService: LoginService) { }

  credentials = { username: '', password: '' };

  submitForm() {
    this.loginService.login(this.credentials.username, this.credentials.password);
  }
}
