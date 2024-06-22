import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css'
})
export class FiltersComponent {
  ingredient: string = '';
  maxCalories: number = 0;
  @Output() filterChange = new EventEmitter<any>();

  applyFilters() {
    const filters = {
      ingredient: this.ingredient,
      maxCalories: this.maxCalories,
    };
    this.filterChange.emit(filters);
  }
}
