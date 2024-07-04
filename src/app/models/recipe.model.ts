export interface Ingredient {
  id: string;
  name: string;
  category: string;
  units: string;
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  instructions: string[];
  ingredients: RecipeIngredient[];
  nutrition: Nutrition;
  createdAt: Date;
}

export interface RecipeIngredient {
  ingredient: Ingredient;
  quantity: string;
}

export interface Nutrition {
  calories: number;
  carbs: number;
  proteins: number;
  fats: number;
}
