import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseURL: string = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey: string = '496521b4b6eefd87265e7561f2f4842e'; // Replace this with your actual API key

  constructor(private http: HttpClient) {}

  getWeatherByCity(cityName: string): Observable<any> {
    const url = `${this.baseURL}?q=${cityName}&appid=${this.apiKey}&units=metric`;
    return this.http.get(url);
  }
}
