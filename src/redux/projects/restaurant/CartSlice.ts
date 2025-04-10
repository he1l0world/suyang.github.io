import { CartItem, CartState } from '../../../types/restaurant/types';
import { findRecipeById } from '../../../utils/restaurant/RestaurantUtils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { recipeId, quantity, comments } = action.payload;
      const exisitingItem = state.items.find(
        (item) => item.recipeId === recipeId,
      );
      if (exisitingItem) {
        exisitingItem.quantity += quantity;
        exisitingItem.comments = comments; // Update comments if item already exists
      } else {
        state.items.push({ recipeId, quantity, comments });
      }
      state.totalPrice += quantity * (findRecipeById(recipeId)?.price ?? 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const recipeId = action.payload;
      state.items = state.items.filter((item) => item.recipeId !== recipeId);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
