import { Component} from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';
import { RecipeComponent } from '../recipe/recipe.component';
import { SearchComponent } from '../search/search.component';
import { RecipeAddComponent } from '../recipe-add/recipe-add.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent, CommonModule, FilterPipe, FormsModule, RecipeComponent, SearchComponent, RecipeAddComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    searchText: string = '';
    setSearchText(value: string) {
        this.searchText = value;
    }
}
