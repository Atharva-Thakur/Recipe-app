import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient } from '../models/recipe.model';
import { IngredientService } from '../services/ingredient.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingredient-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './ingredient-add.component.html',
  styleUrl: './ingredient-add.component.css'
})
export class IngredientAddComponent {
  ingredientForm: FormGroup;

  constructor(private fb: FormBuilder, private ingredientService: IngredientService) {
    this.ingredientForm = this.fb.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      units: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.ingredientForm.valid) {
      const newIngredient: Ingredient = this.ingredientForm.value;
      this.ingredientService.addIngredient(newIngredient).subscribe(response => {
        console.log('Ingredient added successfully:', response);
        this.ingredientForm.reset();
      });
    }
  }
}
