import { Component, inject } from '@angular/core';
import { RecipeService } from '../services/recipe.service';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Recipe } from '../models/recipe.model';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-add',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './recipe-add.component.html',
  styleUrl: './recipe-add.component.css'
})
export class RecipeAddComponent {
  recipeService: RecipeService = inject(RecipeService);
  recipe: Recipe | undefined;
  recipeForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.recipeForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      instructions: this.fb.array([this.fb.control('')]),
      ingredients: this.fb.array([this.createIngredient()]),
      nutrition: this.fb.group({
        calories: [0, Validators.required],
        fats: [0, Validators.required],
        carbs: [0, Validators.required],
        proteins: [0, Validators.required]
      }),
      createdAt: [new Date(), Validators.required]
    });
  }

  get instructions() {
    return this.recipeForm.get('instructions') as FormArray;
  }

  get ingredients() {
    return this.recipeForm.get('ingredients') as FormArray;
  }

  createIngredient(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  addInstruction() {
    this.instructions.push(this.fb.control(''));
  }

  addIngredient() {
    this.ingredients.push(this.createIngredient());
  }

  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }

  handleSubmit() {
    if (this.recipeForm.valid) {
      const recipe: Recipe = this.recipeForm.value;
      this.recipeService.createRecipe(recipe).subscribe({
        next: (newRecipe) => {
          console.log('Recipe created successfully:', newRecipe);
          // Optionally reset the form or navigate to another page
        },
        error: (error) => {
          console.error('Error creating recipe:', error);
        }
      });
    }
  }
}
