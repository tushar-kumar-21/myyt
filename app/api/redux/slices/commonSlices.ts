// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    btnValidator: false,
};

export const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setBtnValidator: (state, action) => {
            state.btnValidator = action.payload;
        },
    },
});

export const {
    setBtnValidator,
} = commonSlice.actions;

export const commonReducer = commonSlice.reducer;
