import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for common directives
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule for HttpClient
import { WeatherService } from '../weather.service'; // Ensure the path is correct
import { FormsModule } from '@angular/forms';
import { AuthenticateService } from '../login-account/authenticate.service';
import { User } from '../app.models';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule] // Include HttpClientModule and CommonModule
})
export class WeatherComponent implements OnInit {
  city: string = ''
  country: string = ''
  weatherInfo: any;
  currentDate: Date = new Date();
  forecastInfo: any;
  lat: number = 0;
  long: number = 0;

  constructor(
    private weatherService: WeatherService, 
    private authService: AuthenticateService
  ) {}

  ngOnInit(): void {
    let user = this.authService.getAuthenticatedUser();
    if(user){
      let defaultCity = user.city;
      this.city = defaultCity;
      this.getWeather();
    }
  }

  getWeather(): void {
    this.weatherService.getCoordinatesByCity(this.city).subscribe(
      (data: any) => {

        let user: User | null = this.authService.getAuthenticatedUser();
        if(user) {
          // add this city as the default for this user
          this.weatherService.addDefaultCity(this.city, user).subscribe({
            next: (response) => {
              console.log('Updated default city!')
            },
            error: (error) => {
              console.log("An error occurred trying to update the user's default city: ", error);
            }
          });
        }
        

        // Extract latitude and longitude from the API response
        console.log("below is location");
        const location = data.results[0].geometry.location;
        console.log(location);
        const lat = location.lat;
        const lon = location.lng;
  
        // Once coordinates are obtained, fetch weather data using these coordinates
        this.weatherService.getWeatherByCity(lat, lon).subscribe(
          (weatherData: any) => {
            this.weatherInfo = weatherData;
            console.log(weatherData);
  
            // Fetch city and country information using reverse geocoding
            this.weatherService.getReverseGeocode(lat, lon).subscribe(
              (reverseGeocodeData: any) => {
                console.log("below is reverseGeocodeData");
                console.log(reverseGeocodeData);
                const addressComponents = reverseGeocodeData.results[0].address_components;
                const city = addressComponents.find((component: { types: string | string[]; }) => component.types.includes('locality'))?.long_name;
                const country = addressComponents.find((component: { types: string | string[]; }) => component.types.includes('country'))?.long_name;
  
                // Assign city and country to display in the UI
                this.city = city;
                this.country = country;
                console.log(this.city + this.country)
              },
              error => {
                console.error('Error fetching reverse geocode data:', error);
              }
            );
          },
          error => {
            console.error('Error fetching weather data:', error);
          }
        );
      },
      error => {
        console.error('Error fetching coordinates:', error);
      }
    );
  }

  getBackgroundImage(): string {
    if (!this.weatherInfo) return ''; // Return empty string if weather data is not available

    const condition = this.weatherInfo.current.weather[0].main.toLowerCase();
    switch (condition) {
      case 'thunderstorm':
        return 'url(https://images.pexels.com/photos/2684011/pexels-photo-2684011.jpeg?cs=srgb&dl=pexels-amolmande-2684011.jpg&fm=jpg)';
      case 'drizzle':
      case 'rain':
        return 'url(https://static.vecteezy.com/system/resources/previews/029/772/287/large_2x/human-daily-life-on-rainy-day-enjoying-rainfall-and-happy-life-lively-rainy-season-concept-generative-ai-free-photo.jpeg)';
      case 'snow':
        return 'url(https://t3.ftcdn.net/jpg/03/00/23/96/360_F_300239640_0N7DxFH5cejBwKBcbdKxQB1xPn8DMn7D.jpg)';
      case 'clear':
        return 'url(https://wallpapers.com/images/hd/sunny-day-wallpaper-nt4lvs3h86s3ax7j.jpg)';
      case 'clouds':
        return 'url(https://img.freepik.com/free-photo/field-yellow-flowers-with-hills-cloudy-sky_181624-14655.jpg)';
      default:
        return 'url(https://wallpapers.com/images/hd/sunny-day-wallpaper-nt4lvs3h86s3ax7j.jpg)';
    }
  }
}