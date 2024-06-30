import { Component} from '@angular/core';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';
import { FilterPipe } from '../pipes/filter.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RecipeListComponent, CommonModule, FilterPipe, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
    searchText: string = '';
}
