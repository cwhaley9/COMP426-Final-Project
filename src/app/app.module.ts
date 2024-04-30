import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from './weather.service';

export const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  declarations: [
    RegisterAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    BrowserModule,
    WeatherComponent,
    AppComponent,
  ],
  providers: [WeatherService],
  bootstrap: []
})
export class AppModule { }
