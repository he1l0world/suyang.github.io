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
  recipe: Recipe;
  quantity: number; // Quantity of the recipe in the cart
}

export interface CartState {
  items: { [key: number]: CartItem }; // Dictionary of CartItemValue objects
  totalPrice: number; // Total price of items in the cart
  comments?: string;
}
