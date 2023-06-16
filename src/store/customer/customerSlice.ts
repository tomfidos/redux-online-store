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
        setLoginStatusAndData: (state, action: PayloadAction<Customer>): void => {
            state.isLogged = !state.isLogged;
            if (state.isLogged) {
                state.jwt_token = action.payload.jwt_token;
            } else {
                state.jwt_token = null;
            }
        },
    }
});

export const { setLoginStatusAndData } = customerSlice.actions;
export default customerSlice.reducer;
