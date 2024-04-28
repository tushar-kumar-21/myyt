// src/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loggedinUser: (state, action) => {},
        registerUser:(state, action)=>{},
    },
});

export const {
    loggedinUser,
    registerUser
} = authSlice.actions;

export const authReducer = authSlice.reducer;
