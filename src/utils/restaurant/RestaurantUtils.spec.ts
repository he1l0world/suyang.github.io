import globalStore, { RootState } from '../../redux/globalStore';
import { findRecipeById } from './RestaurantUtils';

jest.mock('../../redux/globalStore', () => ({
  getState: jest.fn(),
  dispatch: jest.fn(),
}));

describe('restaurant utils', () => {
  const dummyRecipes = [
    {
      id: '1',
      name: 'Pasta',
      price: 10.99,
    },
    {
      id: '2',
      name: 'Salad',
      price: 8.99,
    },
  ];

  beforeEach(() => {
    // Reset all mocks before each test
    jest.clearAllMocks();
    // Set up the mock state
    (globalStore.getState as jest.Mock).mockReturnValue({
      project: {
        recipes: {
          recipes: dummyRecipes,
        },
      },
    } as RootState);
  });

  it('should find recipe by id', () => {
    const find = findRecipeById('1');
    expect(find).toEqual(dummyRecipes[0]);
  });

  it('should return undefined for non-existing id', () => {
    const find = findRecipeById('3');
    expect(find).toBeUndefined();
  });
});
