import { Component} from '@angular/core';
import { RecipeListComponent } from '../../recipe-components/recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from '../../recipe-components/recipe/recipe.component';
import { SearchComponent } from '../../recipe-components/search/search.component';
import { RecipeAddComponent } from '../../recipe-components/recipe-add/recipe-add.component';
import { IngredientAddComponent } from '../../recipe-components/ingredient-add/ingredient-add.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent, CommonModule, FilterPipe, FormsModule, RecipeComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    searchText: string = '';
    setSearchText(value: string) {
        this.searchText = value;
    }
}
