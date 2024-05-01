import { Component } from '@angular/core';
import { User } from '../app.models';
import { NgForm } from '@angular/forms';
import { LoginAccountService } from './login-account.service';
import { Router } from '@angular/router';
import { AuthenticateService } from './authenticate.service';

@Component({
  selector: 'app-login-account',
  templateUrl: './login-account.component.html',
  styleUrl: './login-account.component.css'
})
export class LoginAccountComponent {

  authenticatedUser: User = {username: 'guest', password: 'guest', city: 'New York City'};

  constructor(
    private loginService: LoginAccountService,
    private router: Router,
    private authService: AuthenticateService
  ) {}

  onSubmit(form: NgForm){
    let user: User;

    if (form.valid){
      user = form.value;
      this.loginService.authenticateUser(user).subscribe({
        next: (response) => {
          if(response){
            this.authService.setAuthenticatedUser(response);
            this.router.navigate(['']);
          } else {
            let formContainer = document.getElementById('login-form');

            let badCredentialsMessage = document.createElement('p');
            badCredentialsMessage.innerText = 'Username or Password Incorrect!';
            badCredentialsMessage.style.color = 'red';

            formContainer?.prepend(badCredentialsMessage);
          } 
        },
        error: (error) => {
          console.log("User NOT signed in: ", error);
        }
      });
    }
  }
}
