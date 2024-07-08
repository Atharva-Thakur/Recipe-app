import { Component, OnInit, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Ingredient, Recipe } from '../../models/recipe.model';
import { CommonModule } from '@angular/common';
import { IngredientService } from '../../services/ingredient.service';
@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent implements OnInit {
  recipeForm: FormGroup;
  ingredients: Ingredient[] = [];

  constructor(
    private fb: FormBuilder,
    private recipeService: RecipeService,
    private ingredientService: IngredientService
  ) {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      instructions: this.fb.array([this.fb.control('', Validators.required)]),
      ingredients: this.fb.array([]),
      nutrition: this.fb.group({
        calories: [0, [Validators.required, Validators.min(0)]],
        carbs: [0, [Validators.required, Validators.min(0)]],
        proteins: [0, [Validators.required, Validators.min(0)]],
        fats: [0, [Validators.required, Validators.min(0)]]
      })
    });
  }

  ngOnInit(): void {
    this.ingredientService.getIngredients().subscribe(data => {
      this.ingredients = data;
    });
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  get ingredientsArray() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  addInstruction() {
    this.instructions.push(this.fb.control('', Validators.required));
  }

  addIngredient() {
    this.ingredientsArray.push(this.fb.group({
      ingredient: ['', Validators.required],
      quantity: ['', Validators.required]
    }));
  }

  removeInstruction(index: number) {
    this.instructions.removeAt(index);
  }

  removeIngredient(index: number) {
    this.ingredientsArray.removeAt(index);
  }

  onSubmit() {
    if (this.recipeForm.valid) {
      const formValue = this.recipeForm.value;
      const recipe: Recipe = {
        ...formValue,
        ingredients: formValue.ingredients.map((ingredientFormValue: any) => ({
          ingredient: ingredientFormValue.ingredient,
          quantity: ingredientFormValue.quantity
        })),
        createdAt: new Date()
      };

      this.recipeService.createRecipe(recipe).subscribe(
        response => {
          console.log('Recipe created successfully:', response);
        },
        error => {
          console.error('Error creating recipe:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}