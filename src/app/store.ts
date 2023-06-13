import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import cartReducer from '../store/cart/cartSlice';
import customerReducer from '../store/customer/customerSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    customer: customerReducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
