import globalStore from '../../redux/globalStore';
import { Recipe } from '../../types/restaurant/types';

export const findRecipeById: (recipeId: number) => Recipe | undefined = (
  recipeId: number,
) => {
  const recipes = globalStore.getState().project.recipes.recipes;
  return recipes.find((recipe) => recipe.id === recipeId);
};
