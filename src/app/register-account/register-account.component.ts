import { Component } from '@angular/core';
import { User } from './registration.models';
import { NgForm } from '@angular/forms';
import { RegisterAccountService } from './register-account.service';

@Component({
  selector: 'app-register-account',
  standalone: false,
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent {

  constructor(private registerService: RegisterAccountService) {}

  onSubmit(form: NgForm){
    let user: User;
    if (form.valid){
      user = form.value;
      this.registerService.createUser(user);
    }
  }
}
