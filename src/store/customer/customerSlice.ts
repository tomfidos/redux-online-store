import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Customer } from '../../types/customerSliceTypes';

const initialState: Customer = {
    isLogged: false,
    jwt_token: null,
}


export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<Customer>): void => {
            state.isLogged = action.payload.isLogged;
            state.jwt_token = action.payload.jwt_token;
        },
    }
});

export const { login } = customerSlice.actions;
export default customerSlice.reducer;
