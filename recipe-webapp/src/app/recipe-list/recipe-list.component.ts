import { Component, Input, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule,RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent{
  recipeList : Signal<Recipe[]>;
  recipeService: RecipeService = inject(RecipeService);
  constructor() {
    this.recipeList = this.recipeService.getRecipes();
  }
  ngOnInit(): void {
    this.recipeService.fetchData();
  }
}
