import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WeatherComponent } from './weather/weather.component';

export const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent }
];

@NgModule({
  declarations: [
    RegisterAccountComponent,
    WeatherComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  bootstrap: []
})
export class AppModule { }
