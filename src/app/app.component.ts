import { Component, ElementRef, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { User } from './app.models';
import { AuthenticateService } from './login-account/authenticate.service';
import { WeatherComponent } from './weather/weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, WeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'COMP426-Final-Project';
  authService: AuthenticateService;

  constructor(
    authService: AuthenticateService,
    private router: Router
  ) {
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

  onNavSelect(event: MouseEvent, route: string) {
    event.preventDefault();
  
    // Remove the 'active' class from all navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
    });
  
    const clickedElement = event.target as HTMLElement;
    clickedElement.classList.add('active');
  
    // Perform any other action here, such as navigating to the selected route
    console.log('Selected route:', route);
  }
}
