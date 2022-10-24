import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from './constants';
import axios from 'axios';

export const login = createAsyncThunk(
    'user/login',
    async (value, { rejectWithValue }) => {
        var bodyData = new FormData();
        bodyData.append('email', value.email);
        bodyData.append('password', value.password);
        try {
            const { data } = await axios.post(`${API_URL}user/login`, bodyData)
            return data;
        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        info: null,
        status: null,
        message: null
    },
    reducer: {
        logout: (state) => {
            state.info = null
            state.status = null
            state.message = null
        },
    },
    extraReducers: {
        // LOGIN
        [login.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [login.fulfilled](state, { payload }) {
            state.info = payload.auth
            state.status = HTTP_STATUS.FULFILLED
            state.message = null
        },
        [login.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload.msg
        },
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;