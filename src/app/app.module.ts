import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

const routes: Routes = [
  {path: 'register', component: RegisterAccountComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterAccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
