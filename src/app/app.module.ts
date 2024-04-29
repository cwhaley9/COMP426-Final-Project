import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisterAccountComponent } from './register-account/register-account.component';

const routes: Routes = [
  { path: 'register', component: RegisterAccountComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterAccountComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
