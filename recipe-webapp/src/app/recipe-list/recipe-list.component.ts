import { Component, Input, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule,RecipeComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent{
  recipeList : Recipe[] | undefined;
  recipeService: RecipeService = inject(RecipeService);
  constructor() {
    this.recipeService.getAllRecipes().subscribe((data: Recipe[]) => {
      this.recipeList = data;
    });
  }

  
}
