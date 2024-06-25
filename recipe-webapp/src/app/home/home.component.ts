import { Component, inject, OnInit, signal, Signal } from '@angular/core';
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
export class HomeComponent implements OnInit{
  recipeList : Signal<Recipe[]>;
  recipeService: RecipeService = inject(RecipeService);
  filteredRecipes: Recipe[];
  constructor() {
    this.recipeList = this.recipeService.getRecipes();
    this.filteredRecipes = this.recipeService.getRecipes()();
  }
  ngOnInit(): void {
    this.recipeService.fetchData();
    
  }

  filterRecipes(filter: string): void {
    if(!filter){
      this.filteredRecipes = this.recipeList();
      return;
    }
    this.filteredRecipes = this.recipeList().filter(recipe => recipe.title.toLowerCase().includes(filter.toLowerCase()));
  }
}
