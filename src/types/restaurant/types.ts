export interface Recipe {
  id: number;
  name: string;
  description: string;
  price: number; // Price of the recipe
  cuisineType: string;
  imageUrl?: string;
  ingredients?: string[];
  instructions?: string[];
  prepTime?: string; // in minutes
  dietaryRestrictions?: string[];
}

export interface RecipeState {
  recipes: Recipe[]; // Array of Recipe objects
}

export interface CartItem {
  recipeId: number; // ID of the recipe
  quantity: number; // Quantity of the recipe in the cart
  comments: string; // User comments or notes about the recipe
}

export interface CartState {
  items: CartItem[]; // Array of Recipe objects
  totalPrice: number; // Total price of items in the cart
}
