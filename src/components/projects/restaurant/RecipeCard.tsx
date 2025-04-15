import { Recipe } from '../../../types/restaurant/types';
import { AccessTime } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from '@mui/material';
import React from 'react';

interface RecipeCardProps {
  recipe: Recipe;
  handleAddToCart: (recipeId: number, name: string, price: number) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, handleAddToCart }) => {
  return (
    <Grid item key={recipe.id} xs={12} sm={6} md={4}>
      <Card className='menu-card'>
        <CardMedia
          component='img'
          height='240'
          image={recipe.imageUrl}
          alt={recipe.name}
          className='menu-image'
        />
        <Box sx={{ position: 'relative' }}>
          <Chip
            label={`$${recipe.price}`}
            color='primary'
            className='price-tag'
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant='h5' component='h2'>
            {recipe.name}
          </Typography>
          <Typography variant='body2' color='text.secondary' paragraph>
            {recipe.description}
          </Typography>
          <Box display='flex' alignItems='center' gap={1}>
            <AccessTime fontSize='small' color='action' />
            <Typography variant='body2' color='text.secondary'>
              {recipe.prepTime}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button
            fullWidth
            variant='contained'
            onClick={() =>
              handleAddToCart(recipe.id, recipe.name, recipe.price)
            }
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RecipeCard;
