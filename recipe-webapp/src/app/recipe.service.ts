import { Injectable } from '@angular/core';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8080/api/recipes'; // Replace with your API URL

  async getRecipes(): Promise<Recipe[]> {
    const data = await fetch(this.apiUrl);
    return await data.json();
  }

  // searchRecipes(query: string, filters: any): Observable<Recipe[]> {
  //   // Construct query params based on filters
  //   let params = new HttpParams().set('q', query);
  //   Object.keys(filters).forEach(key => {
  //     params = params.set(key, filters[key]);
  //   });
  //   return this.http.get<Recipe[]>(this.apiUrl, { params });
  // }

  // getRecipeById(id: string): Observable<Recipe> {
  //   return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  // }
}
