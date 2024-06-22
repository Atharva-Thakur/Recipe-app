import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recipe } from './models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8080/recipes'; // Replace with your API URL

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  searchRecipes(query: string, filters: any): Observable<Recipe[]> {
    // Construct query params based on filters
    let params = new HttpParams().set('q', query);
    Object.keys(filters).forEach(key => {
      params = params.set(key, filters[key]);
    });
    return this.http.get<Recipe[]>(this.apiUrl, { params });
  }

  getRecipeById(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }
}
