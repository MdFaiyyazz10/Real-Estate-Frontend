import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    currentUser: null, // current user for the last logged in
    admin: null,
    agent: null,
    partner: null,
    token: null,
    loading: false,
    error: false,
    userId: null,
    role: null,
};



const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            const { role, ...userData } = action.payload;
            state.role = role;
            if (role === "admin") {
                state.admin = userData;
            } else if (role === "agent") {
                state.agent = userData;
            } else if (role === "partner") {
                state.partner = userData;
            }
            state.loading = false;
            state.error = false;
        },
        saveUserId: (state, action) => {
            state.userId = action.payload; // Saving userId in state
        },
        
        signInFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        propertyCreatedStart: (state) => {
            state.loading = true;
        },
        propertyCreatedSuccess: (state, action) => {
            state.loading = false;
            state.error = false;
        },
        propertyCreatedFailed: (state, action) => {
            state.loading = false;
            state.error = action.payload;
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
    saveUserId,
    propertyCreatedStart,
    propertyCreatedSuccess,
    propertyCreatedFailed,
    updateUserStart,
    updateUserSuccess,
    updateUserFailed,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailed,
    logOut,
} = userSlice.actions;

export default userSlice.reducer;
