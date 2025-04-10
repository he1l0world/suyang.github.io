import { Recipe } from '../../../types/restaurant/types';
import '../../../styles/projects/restaurant/restaurant.css';
import { AccessTime } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const RestaurantHome = () => {
    const recipes: Recipe[]= [
        {
          id: 1,
          name: 'Spaghetti Carbonara',
          price: 12.99,
          description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
          imageUrl: 'https://images.unsplash.com/photo-1603052875008-5f3d0f2b1c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
          prepTime: '20 minutes',
          cuisineType: 'Italian',
        }
    ];

    const handleAddToCart = (recipeId: number, name: string, price: number) => {
        // dispatch(addToCart({ recipeId, name, price, quantity: 1 }));
        console.log(`${recipeId} Added to cart: ${name} - $${price}`);
      };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
    <Box textAlign="center" mb={8}>
      <Typography variant="h3" component="h1" gutterBottom>
        Our Menu
      </Typography>
      <Typography variant="h6" color="text.secondary" paragraph>
        Discover our chef's signature dishes
      </Typography>
    </Box>

    <Grid container spacing={4}>
      {recipes.map((recipe) => (
        <Grid item key={recipe.id} xs={12} sm={6} md={4}>
          <Card className='menu-card'>
            <CardMedia
              component="img"
              height="240"
              image={recipe.imageUrl}
              alt={recipe.name}
              className='menu-image'
            />
            <Box sx={{ position: 'relative' }}>
              <Chip
                label={`$${recipe.price}`}
                color="primary"
                sx={{
                  position: 'absolute',
                  top: -20,
                  right: 16,
                  fontWeight: 'bold'
                }}
              />
            </Box>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {recipe.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {recipe.description}
              </Typography>
              <Box display="flex" alignItems="center" gap={1}>
                <AccessTime fontSize="small" color="action" />
                <Typography variant="body2" color="text.secondary">
                  {recipe.prepTime}
                </Typography>
              </Box>
            </CardContent>
            <CardActions>
              <Button
                fullWidth
                variant="contained"
                onClick={() => handleAddToCart(recipe.id, recipe.name, recipe.price)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Container>
  );
};

export default RestaurantHome;
