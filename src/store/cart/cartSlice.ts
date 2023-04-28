import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem } from '../../types/cartSliceTypes';

const initialState: CartState = {
  cartItems: {},
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const id = action.payload.id;
      const quantity = action.payload.quantity
      if (state.cartItems[id]) {
        state.cartItems[id].quantity += quantity;
      } else {
        state.cartItems[id] = {
          id: id,
          quantity: quantity,
        };
      }
    },
    addToTotalQuantity: (state, action: PayloadAction<CartItem>) => {
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      delete state.cartItems[action.payload.id];
      state.totalQuantity -= action.payload.quantity;
    },
  },
});

export const { addToCart, addToTotalQuantity, removeFromCart } = cartSlice.actions;
export const selectTotalQuantity = ((state: CartState) => state.totalQuantity);

export default cartSlice.reducer;
