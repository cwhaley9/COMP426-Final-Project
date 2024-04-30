import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherService } from './weather.service';
import { LoginAccountComponent } from './login-account/login-account.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent },
  { path: 'login', component: LoginAccountComponent },
  { path: 'weather', component: WeatherComponent }
];

@NgModule({
  declarations: [ 
    RegisterAccountComponent,
    LoginAccountComponent
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
