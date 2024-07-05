import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ShoppingListComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  currentUser: any;

  constructor(private storageService:StorageService) { }

  ngOnInit():void{
    this.currentUser = this.storageService.getUser();
  }

}
