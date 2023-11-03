import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token;
        },
    },
});

const { loginSuccess } = auth.actions;

export const login =
    ({ email, passWord }) =>
    async (dispatch) => {
        const res = await axios.post('http://localhost:1337/api/connect/(.*)', {
            username,
            passWord,
        });
        dispatch(loginSuccess(res, data));
    };

export default auth.reducer;
