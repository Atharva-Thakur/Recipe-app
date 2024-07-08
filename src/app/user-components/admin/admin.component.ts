import { Component } from '@angular/core';
import { RecipeAddComponent } from '../../recipe-components/recipe-add/recipe-add.component';
import { IngredientAddComponent } from '../../recipe-components/ingredient-add/ingredient-add.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ RecipeAddComponent, IngredientAddComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
