import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { RegisterAccountComponent } from './register-account/register-account.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginAccountComponent } from './login-account/login-account.component';

export const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent },
  { path: 'login', component: LoginAccountComponent }
];

@NgModule({
  declarations: [
    RegisterAccountComponent,
    LoginAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  bootstrap: []
})
export class AppModule { }
