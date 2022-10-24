import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from './constants';
import axios from 'axios';

export const getCategories = createAsyncThunk(
    'category/getCategories',
    async () => {
        const { data } = await axios.get(`${API_URL}category`)
        return data;
    }
);

export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        list: [],
        status: null,
        message: null
    },
    reducer: {
    },
    extraReducers: {
        // getCategories
        [getCategories.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getCategories.fulfilled](state, { payload }) {
            state.list = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [getCategories.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload
        },
    },
});
export default categorySlice.reducer;