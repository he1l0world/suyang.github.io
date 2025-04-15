import { CartState, Recipe } from '../../../types/restaurant/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  items: {},
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{ recipe: Recipe; quantity: number }>,
    ) => {
      const { recipe, quantity } = action.payload;
      const id = recipe.id;
      if (id in state.items) {
        state.items[id].quantity += quantity;
      } else {
        state.items[id] = { recipe, quantity };
      }

      if (state.items[id].quantity === 0) {
        delete state.items[id];
      }
      state.totalPrice += quantity * recipe.price;
      state.totalPrice = Math.max(0, state.totalPrice); // make sure the total price never go below 0
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

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
