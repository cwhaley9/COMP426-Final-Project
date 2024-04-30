import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http'
import { provideRouter } from '@angular/router';
import { routes } from './app.module';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(withFetch())]
};
