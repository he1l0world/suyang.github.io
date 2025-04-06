import recipesReducer from './restaurant/RecipesSlice';
import cartReducer from './restaurant/CartSlice';
import userReducer from './global/UserSlice';
import themeReducer from './global/ThemeSlice';
import { configureStore } from '@reduxjs/toolkit';

const globalStore = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    recipe: recipesReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export default globalStore;
