import { Component, Input, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { PipesModule } from '../pipes/pipes.module';
import { FilterPipe } from '../pipes/filter.pipe';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule,RecipeComponent, FilterPipe],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent{
  recipeList : Recipe[] = [];
  fiteredRecipeList: Recipe[] = [];
  recipeService: RecipeService = inject(RecipeService);

  @Input() searchText: string = '';
  constructor() {
    this.recipeService.getAllRecipes().subscribe((data: Recipe[]) => {
      this.recipeList = data;
    });
    this.fiteredRecipeList.push(this.recipeList[1]);
    // this.filterRecipes();
  }  
  


}
