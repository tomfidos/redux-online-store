import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartState = {
  cartItems: {},
  totalQuantity: 0,
};

export interface CartState {
  cartItems: CartItems,
  totalQuantity: number
}

export interface CartItems {
  [id: number]: CartItem;
}

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
      if (state.cartItems[id]) {
        state.cartItems[id].quantity += quantity;
      } else {
        state.cartItems[id] = {
          id: id,
          quantity: quantity,
        };
      }
    },
    getCartTotalQuantity: (state, action: PayloadAction<CartItem>) => {
      state.totalQuantity += action.payload.quantity;
    }
  },
});

export const { addToCart, getCartTotalQuantity } = cartSlice.actions;

export default cartSlice.reducer;
