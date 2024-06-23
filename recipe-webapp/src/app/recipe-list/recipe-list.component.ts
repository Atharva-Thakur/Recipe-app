import { Component, Input, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../models/recipe.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent{
  @Input() recipes !: Signal<Recipe[]>;
  
}
