import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
    //Generate a route for the home page
    { path: '', component: HomeComponent, title: 'Home' },
    { path: 'details/:id', component: RecipeDetailComponent, title: 'RecipeDetails' },
];
