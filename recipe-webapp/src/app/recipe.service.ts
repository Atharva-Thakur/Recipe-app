import { Injectable, Signal, signal } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://localhost:8080/api/recipes'; // Replace with your API URL

  private dataSignal= signal<Recipe[]>([]);

  constructor(private http: HttpClient) {}

  fetchData(): void{
    this.http.get<Recipe[]>(this.apiUrl).subscribe((data)=>{this.dataSignal.set(data);})
  }
  getRecipes(): Signal<Recipe[]> {
    return this.dataSignal;
  }

  async getRecipeById(id: string): Promise<Recipe | undefined> {
    const data = await fetch(`${this.apiUrl}/${id}`);
    return await data.json() ?? {};
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
