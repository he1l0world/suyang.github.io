import { Recipe } from '../../../types/restaurant/types';
import { AccessTime } from '@mui/icons-material';
import {
  Badge,
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
  totalAmount?: number;
  handleAddToCart: (params: { recipe: Recipe; quantity: number }) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  totalAmount,
  handleAddToCart,
}) => {
  return (
    <Grid item key={recipe.id} xs={12} sm={6} md={4}>
      <Card className='menu-card'>
        {totalAmount !== undefined && totalAmount > 0 && (
          <Badge badgeContent={totalAmount} color='secondary'
          max={99}
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            zIndex: 2,
            '& .MuiBadge-badge': {
              fontSize: '0.9rem',
              height: '28px',
              minWidth: '28px',
              borderRadius: '14px',
              backgroundColor: 'secondary.main',
              border: (theme) => `2px solid ${theme.palette.background.paper}`,
              color: 'white',
              fontWeight: 'bold',
              animation: 'badgePulse 1.5s ease-in-out',
              '@keyframes badgePulse': {
                '0%': {
                  transform: 'scale(1)',
                },
                '50%': {
                  transform: 'scale(1.2)',
                },
                '100%': {
                  transform: 'scale(1)',
                }
              }
            }
          }}></Badge>
        )}
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
            onClick={() => handleAddToCart({ recipe, quantity: 1 })}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default RecipeCard;
