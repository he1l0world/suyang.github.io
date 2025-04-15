import { CartState, Recipe } from '../../../types/restaurant/types';
import '../../../styles/projects/restaurant/restaurant.css';
import { RootState, useAppDispatch, useAppSelector } from '../../../redux/globalStore';
import { addToCart } from '../../../redux/projects/restaurant/CartSlice';
import RecipeCard from './RecipeCard';
import {
  Badge,
  Box,
  Chip,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ShoppingCart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const RestaurantHome = () => {
  const dispatch = useAppDispatch();
  const cartState: CartState = useAppSelector(
    (state: RootState) => state.project.cart,
  );
  const recipes: Recipe[] = useAppSelector(
    (state: RootState) => state.project.recipes.recipes,
  );

  const categories: string[] = [
    ...new Set(recipes.map((each) => each.cuisineType)),
  ];

  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleAddToCart = (
    recipe: Recipe,
    quantity: number,
  ) => {
    dispatch(addToCart({ recipe, quantity }));
    // console.log(`${recipeId} Added to cart: ${name} - $${price}`);
  };

  const handleClick = (cuisine: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(cuisine)) {
        return prev.filter((each) => each !== cuisine);
      }
      return [...selectedCategories, cuisine];
    });
  };

  const FloatingCart = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
      <IconButton
        component={Link}
        to='/projects/cart'
        aria-label='cart'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        sx={{
          position: 'fixed',
          bottom: 32,
          right: 32,
          width: 64,
          height: 64,
          backgroundColor: 'primary.main',
          boxShadow: isHovered ? '0 8px 16px rgba(0,0,0,0.2)' : '0 4px 8px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            backgroundColor: 'primary.dark',
            transform: 'scale(1.1) rotate(5deg)',
          },
          zIndex: 1000,
        }}
      >
        <Badge
          badgeContent={Object.keys(cartState.items).length}
          color='secondary'
          sx={{
            '& .MuiBadge-badge': {
              fontSize: '1rem',
              height: '24px',
              minWidth: '24px',
              transform: 'scale(1) translate(50%, -50%)',
              transition: 'transform 0.2s ease-in-out',
              '&:hover': {
                transform: 'scale(1.1) translate(50%, -50%)',
              },
            },
          }}
        >
          <ShoppingCart sx={{ 
          fontSize: 32,
          color: 'white',
          transition: 'transform 0.2s ease-in-out',
          transform: isHovered ? 'translateY(-2px)' : 'none'
        }}/>
        </Badge>
      </IconButton>
    );
  };

  return (
    <Container
      maxWidth='lg'
      sx={{
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
          borderRadius: '2px',
        },
      }}
    >
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
      <Grid container spacing={4}>
        {recipes
          .filter(
            (each) =>
              selectedCategories.length == 0 ||
              selectedCategories.includes(each.cuisineType),
          )
          .map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              totalAmount={cartState.items[recipe.id]?.quantity}
              handleAddToCart={() => handleAddToCart(recipe, 1)}
            />
          ))}
      </Grid>
      <FloatingCart />
    </Container>
  );
};

export default RestaurantHome;
