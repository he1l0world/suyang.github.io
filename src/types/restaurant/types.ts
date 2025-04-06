export interface Recipe {
  id: string;
  name: string;
  description: string;
  price: number; // Price of the recipe
  imageUrl?: string;
  ingredients: string[];
  instructions: string[];
  prepTime?: number; // in minutes
  cookTime?: number; // in minutes
  servings?: number;
  cuisineType: string;
  dietaryRestrictions: string[];
}

export interface RecipeState {
  recipes: Recipe[]; // Array of Recipe objects
}

export interface CartItem {
  recipeId: string; // ID of the recipe
  quantity: number; // Quantity of the recipe in the cart
  comments: string; // User comments or notes about the recipe
}

export interface CartState {
  items: CartItem[]; // Array of Recipe objects
  totalPrice: number; // Total price of items in the cart
}
