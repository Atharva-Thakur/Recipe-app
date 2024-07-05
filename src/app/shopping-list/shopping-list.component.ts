import { Component, OnInit } from '@angular/core';
import { ShoppingList, ShoppingListItem } from '../models/ShoppingList.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { StorageService } from '../services/storage.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent implements OnInit {
  shoppingList: ShoppingList = { id: '', user: '', items: [] };
  newItem: ShoppingListItem = { ingredient: '', quantity: '' };
  
  userId = this.storageService.getUser().id;

  constructor(private shoppingListService: ShoppingListService,private storageService: StorageService) {}

  ngOnInit(): void {
    this.loadShoppingList();
  }

  loadShoppingList(): void {
    this.shoppingListService.getShoppingList(this.userId).subscribe(list => {
      if (list) {
        this.shoppingList = list;
      } else {
        this.shoppingList.user = this.userId;
      }
    });
  }

  addShoppingList(): void {
    this.shoppingListService.addShoppingList(this.shoppingList).subscribe(list => {
      this.shoppingList = list;
    });
  }

  addItemToShoppingList(): void {
    this.shoppingListService.addItemToShoppingList(this.shoppingList.id, this.newItem).subscribe(list => {
      this.shoppingList = list;
      this.newItem = { ingredient: '', quantity: '' };
    });
  }

  deleteItemFromShoppingList(ingredientName: string): void {
    this.shoppingListService.deleteItemFromShoppingList(this.shoppingList.id, ingredientName).subscribe(list => {
      this.shoppingList = list;
    });
  }
}
