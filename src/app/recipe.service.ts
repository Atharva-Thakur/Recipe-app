import { Injectable, Signal, signal } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8082/api/recipes'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  createRecipe(recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(this.apiUrl, recipe);
  }

  updateRecipe(id: string, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.apiUrl}/${id}`, recipe);
  }

  deleteRecipe(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
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
