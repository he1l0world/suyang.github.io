import recipesReducer from './projects/restaurant/RecipesSlice';
import cartReducer from './projects/restaurant/CartSlice';
import userReducer from './global/UserSlice';
import themeReducer from './global/ThemeSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const projectReducer = combineReducers({
  recipes: recipesReducer,
  cart: cartReducer,
});

const globalStore = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    project: projectReducer,
  },
});

export type RootState = ReturnType<typeof globalStore.getState>;
export type AppDispatch = typeof globalStore.dispatch;

export default globalStore;
