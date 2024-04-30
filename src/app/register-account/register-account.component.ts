import { Component } from '@angular/core';

@Component({
  selector: 'app-register-account',
  standalone: false,
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent {

  onSubmit(){
    console.log("success");
  }
}
