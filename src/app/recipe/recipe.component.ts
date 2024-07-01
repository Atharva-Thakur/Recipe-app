import { Component, Input } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, NgOptimizedImage],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  @Input() recipe !: Recipe;
}
