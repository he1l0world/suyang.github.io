import { Add, Delete, Remove } from '@mui/icons-material';
import { CartItem, CartState } from '../../../types/restaurant/types';
import {
  clearCart,
  decrease,
  increase,
  removeFromCart,
} from '../../../redux/projects/restaurant/CartSlice';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ItemCardProps {
  item: CartItem;
}

const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Card key={item.recipe.id} sx={{ mb: 2 }}>
      <CardContent>
        <Box display='flex' justifyContent='space-between' alignItems='center'>
          <Box>
            <Typography variant='h6'>{item.recipe.name}</Typography>
            <Typography color='text.secondary'>
              ${item.recipe.price} each
            </Typography>
          </Box>

          <Box display='flex' alignItems='center' gap={2}>
            <Box
              display='flex'
              alignItems='center'
              bgcolor='grey.100'
              borderRadius={2}
              px={1}
            >
              <IconButton
                size='small'
                onClick={() => dispatch(increase((item.recipe.id, 1)))}
              >
                <Remove />
              </IconButton>
              <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
              <IconButton
                size='small'
                onClick={() => dispatch(decrease((item.recipe.id, 1)))}
              >
                <Add />
              </IconButton>
            </Box>

            <IconButton
              color='error'
              onClick={() => dispatch(removeFromCart(item.recipe.id))}
            >
              <Delete />
            </IconButton>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const ShoppingCart = (cartState: CartState) => {
  const dispatch = useDispatch();
  const handleCheckout = () => {
    alert('Thank you for your order!');
    dispatch(clearCart());
  };
  return (
    <Container maxWidth='lg'>
      <Typography variant='h4' gutterBottom>
        Shopping Cart
      </Typography>

      <Grid container spacing={4}>
        <Grid item md={8}>
          {Object.values(cartState.items).map((item) => (
            <ItemCard item={item} />
          ))}
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant='h6' gutterBottom>
              Order Summary
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Box display='flex' justifyContent='space-between' mb={2}>
              <Typography variant='h5'>Total:</Typography>
              <Typography variant='h5' color='primary'>
                ${cartState.totalPrice.toFixed(2)}
              </Typography>
            </Box>
            <Button
              variant='contained'
              color='primary'
              fullWidth
              size='large'
              onClick={handleCheckout}
            >
              Proceed to Checkout
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShoppingCart;
