import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  private baseUrl = 'http://localhost:8082/api/ingredients';

  constructor(private http: HttpClient) { }

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(this.baseUrl);
  }

  addIngredient(ingredient: Ingredient): Observable<Ingredient> {
    return this.http.post<Ingredient>(this.baseUrl, ingredient);
  }
}
