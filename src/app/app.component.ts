import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { User } from './app.models';
import { AuthenticateService } from './login-account/authenticate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'COMP426-Final-Project';
  authService: AuthenticateService;

  constructor(authService: AuthenticateService) {
    this.authService = authService;
  }

  deleteAuthenticatedUser(){
    this.authService.deleteAccount().subscribe({
      next: (response) => {
        this.authService.setAuthenticatedUser(null);
      },
      error: (error) => {
        console.log("User NOT deleted: ", error);
      }
    });
  }
}
