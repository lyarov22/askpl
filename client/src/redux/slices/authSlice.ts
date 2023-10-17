import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
    userId: string | null;
    token: string | null;
    username: string;
    password: string;
}

const initialState: User = {
    userId: null,
    token: null,
    username: '',
    password: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        loginUser: (state, action: PayloadAction<{ userId: string; token: string }>) => {
            state.token = action.payload.token;
            state.userId = action.payload.userId;
        },
        logoutUser: (state) => {
            state.token = null;
            state.userId = null;
        },
    },
});

export const { loginUser, logoutUser, setPassword, setUsername } = authSlice.actions;
export default authSlice.reducer;
