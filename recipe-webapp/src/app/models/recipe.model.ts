export interface Ingredient {
    name: string;
    quantity: string;
  }
  
export interface Nutrition {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
  }
  
export interface Recipe {
    id: string;
    title: string;
    description: string;
    // instructions: string[];
    // ingredients: Ingredient[];
    // nutrition: Nutrition;
    // createdAt: Date;
  }
  