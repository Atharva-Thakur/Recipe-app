import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  // searchText: string = '';
  @Output() searchEvent= new EventEmitter<string>();

  getSearchText(value: string) {
    this.searchEvent.emit(value);
  }
}
