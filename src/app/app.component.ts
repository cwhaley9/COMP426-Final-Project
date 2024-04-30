import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
}
