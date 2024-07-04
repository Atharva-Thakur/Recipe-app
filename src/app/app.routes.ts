import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    //Generate a route for the home page
    { path: 'recipe', component: HomeComponent, title: 'Home' },
    { path: 'details/:id', component: RecipeDetailComponent, title: 'RecipeDetails' },
    // { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'profile', component: ProfileComponent },
    {path: 'admin', component: AdminComponent, title: 'Admin'},
    {path:'', component: WelcomeComponent, title: 'Welcome'}
];
