import { Component} from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { Ingredient, Nutrition, Recipe } from '../models/recipe.model';
import { RecipeComponent } from '../recipe/recipe.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent, CommonModule, FilterPipe, FormsModule, RecipeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    searchText: string = '';
}
