import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    token: null,
    userId: null,
    error: false,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.token = action.payload.token;
            state.userId = action.payload.userId; // User ID ko set karein
            state.loading = false;
            state.error = false;
        },
        signInFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },

          // New reducer for updating user ID
        setUserId: (state, action) => {
            state.userId = action.payload; // User ID ko set karein
        },



        updateUserStart: (state) => {
            state.loading = true;
        },
        updateUserSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = false;
        },
        updateUserFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        deleteUserStart: (state) => {
            state.loading = true;
        },
        deleteUserSuccess: (state, action) => {
            state.currentUser = null;
            state.token = null;
            state.loading = false;
            state.error = false;
        },
        deleteUserFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logOut: (state) => {
            state.currentUser = null;
            state.token = null;
            state.loading = false;
            state.error = false;
        },
    },
});

export const {
    signInStart,
    signInSuccess,
    signInFailed,
    setUserId,


    updateUserStart,
    updateUserSuccess,
    updateUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailed,
    logOut,
} = userSlice.actions;

export default userSlice.reducer;
