import { Component } from '@angular/core';
import { WeatherService } from '../weather.service'; // Adjust the path as necessary

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  city: string = '';
  weatherInfo: any;

  constructor(private weatherService: WeatherService) {}

  getWeather(): void {
    this.weatherService.getWeatherByCity(this.city).subscribe(
      data => {
        this.weatherInfo = data;
      },
      error => {
        console.error('Error fetching weather data:', error);
      }
    );
  }
}
