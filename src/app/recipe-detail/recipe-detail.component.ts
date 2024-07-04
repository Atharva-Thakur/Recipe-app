import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent{
  route: ActivatedRoute = inject(ActivatedRoute);
  recipeService: RecipeService = inject(RecipeService);
  recipe: Recipe | undefined;

  constructor() {
    const id = this.route.snapshot.params['id'];
    this.recipeService.getRecipeById(id).subscribe((data: Recipe) => {
      this.recipe = data;
    });
  }


}