import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    incrementProductQuantity: (state, action: PayloadAction<number>) => {
      const item = state.precart[action.payload];
      item.quantity++;
    },
    decrementProductQuantity: (state, action: PayloadAction<number>) => {
      const item = state.precart[action.payload];
      item.quantity--;
    },
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      if (state.cart[id]) {
        state.cart[id].quantity += state.precart[id].quantity;
      } else {
        state.cart[id].quantity = state.precart[id].quantity;
      }    
    }
  },
});

export const { incrementProductQuantity, decrementProductQuantity, addToCart } = cartSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectQuantity = (state: CartState, action: PayloadAction<number>) => state.precart[action.payload].quantity;

export default cartSlice.reducer;
