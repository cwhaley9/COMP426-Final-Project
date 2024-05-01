import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './app.models';

@Injectable({
  providedIn: 'root', // Ensures a singleton instance across the app
})
export class WeatherService {
  private openWeatherBaseURL: string = 'https://api.openweathermap.org/data/3.0/onecall';
  private openWeatherApiKey: string = '496521b4b6eefd87265e7561f2f4842e'; // Replace this with your actual API key
  private googleGeocodingApiUrl: string = 'https://maps.googleapis.com/maps/api/geocode/json';
  private googleApiKey: string = 'AIzaSyBOH1PjJfQzwQrlR-_dtniFi3X_r1rZbho';

  constructor(private http: HttpClient) {}

  getWeatherByCity(lat: string, long: string): Observable<any> {
    return this.http.get(`${this.openWeatherBaseURL}?lat=${lat}&lon=${long}&units=imperial&exclude={part}&appid=${this.openWeatherApiKey}`);
  }


  getCoordinatesByCity(city: string): Observable<any> {
    return this.http.get(`${this.googleGeocodingApiUrl}?address=${city}&key=${this.googleApiKey}`);
  }

  getReverseGeocode(lat: number, lon: number): Observable<any> {
    return this.http.get(`${this.googleGeocodingApiUrl}?latlng=${lat},${lon}&key=${this.googleApiKey}`);
  }

  addDefaultCity(city: string, user: User): Observable<any> {
    let userWithCity: User = user;
    userWithCity.city = city;
    return this.http.put(`http://localhost:3000/api/users/${user.username}`, userWithCity);
  }
}