import { Component, Input } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RecipeService } from '../../services/recipe.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, NgOptimizedImage],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {

  private roles: string[] = [];
  isLoggedIn = false;
  isAdmin = false;

  constructor(private recipeService:RecipeService,private storageService: StorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.storageService.isLoggedIn();

    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');

    }
  }
  @Input() recipe !: Recipe;

  onDelete(recipeId: string): void {
    if (confirm('Are you sure you want to delete this recipe?')) {
      this.recipeService.deleteRecipe(recipeId).subscribe(
        () => {
          console.log('Recipe deleted successfully');
          // Add any additional logic after successful deletion, e.g., refreshing the list
        },
        error => {
          console.error('Error deleting recipe:', error);
        }
      );
    }
  }
}
