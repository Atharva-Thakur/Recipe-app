import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
    //Generate a route for the home page
    { path: '', redirectTo: 'recipes', pathMatch: 'full' },
    //Generate a route for the recipe list page
    { path: 'recipes', component: RecipeListComponent },
    //Generate a route for the recipe detail page
    { path: 'recipes/:id', component: RecipeDetailComponent}
];
