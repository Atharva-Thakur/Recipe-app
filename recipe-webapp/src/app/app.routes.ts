import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    //Generate a route for the home page
    { path: '', component: HomeComponent, title: 'Home' },
];
