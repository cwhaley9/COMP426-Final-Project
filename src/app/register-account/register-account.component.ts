import { Component } from '@angular/core';
import { User } from '../app.models';
import { NgForm } from '@angular/forms';
import { RegisterAccountService } from './register-account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-account',
  standalone: false,
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent {

  constructor(
    private registerService: RegisterAccountService,
    private router: Router
  ) {}

  onSubmit(form: NgForm){
    let user: User;

    if (form.valid){
      user = form.value;
      
      this.registerService.checkExists(user).subscribe({
        next: (response) => {
          if(response.exists){
            let formContainer = document.getElementById('register-form');

            let userExistsMessage = document.createElement('p');
            userExistsMessage.innerText = 'A user with this username already exists!';
            userExistsMessage.style.color = 'red';

            formContainer?.prepend(userExistsMessage);
          } else {
            this.addUser(user);
            form.reset();
            this.router.navigate(['']);
          }
        },
        error: (error) => {
          console.log("User NOT created: ", error);
        }
      });
    }
  }

  addUser(user: User){
    this.registerService.createUser(user).subscribe({
      next: (response) => { 
        console.log("User Created!"); 
      },
      error: (error) => {
        console.log("User NOT created: ", error);
      }
    });
  }
}
