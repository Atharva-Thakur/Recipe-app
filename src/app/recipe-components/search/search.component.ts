import { Component, EventEmitter, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FontAwesomeModule],
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
