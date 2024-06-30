import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';
import { pipe } from 'rxjs';

@Pipe({ name: 'appFilter', standalone: true})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      return it.includes(searchText);
    });
  }
}