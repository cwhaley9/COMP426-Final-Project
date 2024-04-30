import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

export const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent }
];

@NgModule({
  declarations: [
    RegisterAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  bootstrap: []
})
export class AppModule { }
