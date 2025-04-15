import { CartItem, CartState } from '../../../types/restaurant/types';
import { findRecipeById } from '../../../utils/restaurant/RestaurantUtils';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: {},
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { recipe, quantity, comments } = action.payload;
      const id = recipe.id;
      if (id in state) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { recipe, quantity, comments };
      }

      state.totalPrice += quantity * (findRecipeById(id)?.price ?? 0);
    },
    increase: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalPrice += state.items[id].recipe.price;
    },
    decrease: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items[id].quantity -= 1;
      state.totalPrice -= state.items[id].recipe.price;
      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const recipe = state.items[id];
      state.totalPrice -= recipe.quantity * recipe.quantity;
      delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, increase, decrease, removeFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
