import { Pipe, PipeTransform } from '@angular/core';
import { Recipe } from '../models/recipe.model';

@Pipe({ name: 'appFilter', standalone: true })
export class FilterPipe implements PipeTransform {

  transform(items: Recipe[], searchText: string): Recipe[] {
    console.log('items before filter:', items);
    console.log('searchText:', searchText);

    if (!searchText) {
      console.log('No searchText provided, returning all items.');
      return items;
    }

    searchText = searchText.toLowerCase();
    console.log('searchText (lowercase):', searchText);

    const filteredItems = items.filter((it) => {
      const titleMatches = it?.title.toLowerCase().includes(searchText);
      const descriptionMatches = it?.description.toLowerCase().includes(searchText);

      console.log(`Checking item: ${it?.title}`);
      console.log(`Title matches: ${titleMatches}`);
      console.log(`Description matches: ${descriptionMatches}`);

      return titleMatches || descriptionMatches;
    });

    console.log('filtered items:', filteredItems);
    return filteredItems;
  }
}
