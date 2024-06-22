import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  searchQuery: string = '';
  filters: any = {};

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.getRecipes();
  }

  getRecipes() {
    this.recipeService.getRecipes().subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  onSearch(query: string) {
    this.searchQuery = query;
    this.applySearchAndFilters();
  }

  onFilterChange(filters: any) {
    this.filters = filters;
    this.applySearchAndFilters();
  }

  applySearchAndFilters() {
    this.recipeService.searchRecipes(this.searchQuery, this.filters).subscribe((recipes) => {
      this.recipes = recipes;
    });
  }

  selectRecipe(id: string) {
    // Navigate to the recipe detail view

  }
}
