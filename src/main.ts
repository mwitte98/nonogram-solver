import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { environment } from './environments/environment';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, title: 'Nonogram Solver' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
}).catch();
