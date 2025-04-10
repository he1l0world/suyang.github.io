import { AccessTime } from '@mui/icons-material';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Container, Grid, Typography } from '@mui/material';
import React from 'react';

const RestaurantHome = () => {
    const recipes = [
        { 
            id: "1",
            name: 'Spaghetti Carbonara',
            price: 12.99,
            description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
            image: 'https://images.unsplash.com/photo-1603052875008-5f3d0f2b1c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
            preparationTime: '20 minutes'
        }

        
    ];

    const handleAddToCart = (recipeId: string, name: string, price: number) => {
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
          <Card sx={{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-8px)'
            }
          }}>
            <CardMedia
              component="img"
              height="240"
              image={recipe.image}
              alt={recipe.name}
              sx={{
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)'
                }
              }}
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
                  {recipe.preparationTime}
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
