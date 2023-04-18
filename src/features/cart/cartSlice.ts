import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { act } from 'react-dom/test-utils';

export interface CartState {
  cart: {
    [id: number]: CartItem;
  };
  precart: {
    [id: number]: CartItem;
  }
}

const initialState: CartState = {
  cart: {},
  precart: {
    1: {
      quantity: 0,
    },
    2: {
      quantity: 0,
    },
    3: {
      quantity: 0,
    },
  },
};

interface CartItem {
  quantity: number;
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    incrementProductQuantity: (state, action: PayloadAction<number>): void => {
      state.precart[action.payload].quantity++;
    },
    decrementProductQuantity: (state, action: PayloadAction<number>): void => {
      if (state.precart[action.payload].quantity > 0) {
        state.precart[action.payload].quantity--;
      };
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id].quantity += state.precart[id].quantity;
      } else {
        state.cart[id] = { quantity: state.precart[id].quantity };
      }
      state.precart[id].quantity = 0;
    }
  },
});

export const { incrementProductQuantity, decrementProductQuantity, addToCart } = cartSlice.actions;

export default cartSlice.reducer;
