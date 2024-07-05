import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ShoppingList, ShoppingListItem } from '../models/ShoppingList.model';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private apiUrl = 'http://localhost:8082/api/shopping';

  constructor(private http: HttpClient) {}

  getShoppingList(userId: string): Observable<ShoppingList> {
    return this.http.get<ShoppingList>(`${this.apiUrl}/user/${userId}`, { withCredentials: true });
  }

  addShoppingList(shoppingList: ShoppingList): Observable<ShoppingList> {
    return this.http.post<ShoppingList>(this.apiUrl, shoppingList, { withCredentials: true });
  }

  addItemToShoppingList(shoppingListId: string, item: ShoppingListItem): Observable<ShoppingList> {
    console.log(item);
    console.log(shoppingListId);
    return this.http.put<ShoppingList>(`${this.apiUrl}/${shoppingListId}`, item, { withCredentials: true });
  }

  deleteItemFromShoppingList(shoppingListId: string, ingredientName: string): Observable<ShoppingList> {
    return this.http.delete<ShoppingList>(`${this.apiUrl}/${shoppingListId}/items`, {
      params: { ingredientName }
    });
  }
}