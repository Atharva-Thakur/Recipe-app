export interface ShoppingListItem {
    ingredient: string;
    quantity: string;
}
  
export interface ShoppingList {
    id: string;
    user: string;
    items: ShoppingListItem[];
}
  