import { initialRecipes } from '../../../components/projects/restaurant/resources/Recipes';
import { Recipe, RecipeState } from '../../../types/restaurant/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RecipeState = {
  recipes: initialRecipes,
};

const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action: PayloadAction<Recipe>) => {
      const newRecipe = action.payload;
      state.recipes.push(newRecipe);
    },
    removeRecipe: (state, action: PayloadAction<number>) => {
      const recipeId = action.payload;
      state.recipes = state.recipes.filter((recipe) => recipe.id !== recipeId);
    },
  },
});

export const { addRecipe, removeRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
