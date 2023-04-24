import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CartState {
  [id: number]: CartItem;
}

const initialState: CartState = {};

export interface CartItem {
  id: number,
  quantity: number;
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const id = action.payload.id;
      const quantity = action.payload.quantity
      if (state[id]) {
        state[id].quantity += quantity;
      } else {
        state[id] = {
          id: id,
          quantity: quantity,
        };
      }
    }
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
