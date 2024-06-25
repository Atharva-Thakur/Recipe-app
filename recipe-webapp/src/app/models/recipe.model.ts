export interface Ingredient {
    name: string;
    quantity: string;
  }
  
export interface Nutrition {
    calories: number;
    fats: number;
    carbs: number;
    proteins: number;
  }
  
export interface Recipe {
    id: string;
    title: string;
    description: string;
    instructions: string[];
    ingredients: Ingredient[];
    nutrition: Nutrition;
    createdAt: Date;
  }
  