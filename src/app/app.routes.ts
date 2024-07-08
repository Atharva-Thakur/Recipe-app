import { Routes } from '@angular/router';
import { HomeComponent } from './user-components/home/home.component';
import { RecipeDetailComponent } from './recipe-components/recipe-detail/recipe-detail.component';
import { LoginComponent } from './authentication-components/login/login.component';
import { RegisterComponent } from './authentication-components/register/register.component';
import { ProfileComponent } from './user-components/profile/profile.component';
import { WelcomeComponent } from './user-components/welcome/welcome.component';
import { AdminComponent } from './user-components/admin/admin.component';

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
