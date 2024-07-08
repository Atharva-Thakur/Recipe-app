import { Component, Input, Signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { Recipe } from '../../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FilterPipe } from '../../pipes/filter.pipe';
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
