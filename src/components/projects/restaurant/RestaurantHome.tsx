import { Recipe } from '../../../types/restaurant/types';
import '../../../styles/projects/restaurant/restaurant.css';
import { RootState } from '../../../redux/globalStore';
import RecipeCard from './RecipeCard';
import { Box, Chip, Container, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const RestaurantHome = () => {
  const recipes: Recipe[] = useSelector((state: RootState) => state.project.recipes.recipes)
  const categories: string[] = [...new Set(recipes.map(
    (each) => each.cuisineType,
  ))];
  

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleAddToCart = (recipeId: number, name: string, price: number) => {
    // dispatch(addToCart({ recipeId, name, price, quantity: 1 }));
    console.log(`${recipeId} Added to cart: ${name} - $${price}`);
  };

  const handleClick = (cuisine: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cuisine)) {
        return prev.filter((each) => each !== cuisine);
      }
      return [...selectedCategories, cuisine];
    });
  };

  return (
    
    <Container maxWidth='lg'        sx={{
      position: 'relative',
      '&::after': {
        content: '""',
        position: 'absolute',
        bottom: '-20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60px',
        height: '4px',
        backgroundColor: 'primary.main',
        borderRadius: '2px'
      }
    }}>
      <Box textAlign='center' mb={8}>
        <Typography variant='h3' component='h1' gutterBottom>
          Our Menu
        </Typography>
        <Typography variant='h6' color='text.secondary' paragraph>
          Discover our chef's signature dishes
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          mb: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
          p: 2,
          boxShadow: 1,
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          useFlexGap
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
        >
          {categories.map((category, index) => (
            <Chip
              key={index}
              label={category}
              onClick={() => handleClick(category)}
              color={
                selectedCategories.includes(category) ? 'primary' : 'default'
              }
              sx={{
                px: 2,
                py: 2.5,
                fontSize: '1rem',
                fontWeight: 500,
                '&:hover': {
                  backgroundColor: selectedCategories.includes(category)
                    ? 'primary.dark'
                    : 'grey.300',
                },
                transition: 'all 0.2s ease-in-out',
              }}
            />
          ))}
        </Stack>
      </Box>
      <Grid
        container
        spacing={4}
      >
        {recipes
          .filter(
            (each) =>
              selectedCategories.length == 0 ||
              selectedCategories.includes(each.cuisineType),
          )
          .map((recipe) => (
            <RecipeCard recipe={recipe} handleAddToCart={handleAddToCart} />
          ))}
      </Grid>
    </Container>
  );
};

export default RestaurantHome;
