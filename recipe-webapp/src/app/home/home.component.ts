import { Component, inject } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RecipeService } from '../recipe.service';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  recipeList : Recipe[] =[];
  recipeService: RecipeService = inject(RecipeService);
  filteredRecipes: Recipe[] = [];
  constructor() {
    this.recipeService.getRecipes().then((recipes: Recipe[]) => {
      this.recipeList = recipes;
    });
  }
}
