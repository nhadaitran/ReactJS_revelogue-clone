import { createSlice, createAsyncThunk, current } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from './constants';
import axios from 'axios';

export const getArticles = createAsyncThunk(
    'category/getArticles',
    async () => {
        const { data } = await axios.get(`${API_URL}article`)
        return data;
    }
);

export const getArticle = createAsyncThunk(
    'category/getArticle',
    async (value) => {
        const { data } = await axios.get(`${API_URL}article/${value}`)
        return data;
    }
);

export const getArticlesByCategoryID = createAsyncThunk(
    'category/getArticlesByCategoryID',
    async (value) => {
        const { data } = await axios.get(`${API_URL}article/category/${value}`)
        return data;
    }
);

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        list: [],
        listByCategory: [],
        item: null,
        status: null,
        message: null
    },
    // reducer: {
    // },
    extraReducers: {
        // getArticles
        [getArticles.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getArticles.fulfilled](state, { payload }) {
            state.list = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [getArticles.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload
        },

        // getArticle
        [getArticle.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getArticle.fulfilled](state, { payload }) {
            state.item = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [getArticle.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload
        },

        //getArticlesByCategoryID
        [getArticlesByCategoryID.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getArticlesByCategoryID.fulfilled](state, { payload }) {
            state.listByCategory.push(payload)
            state.status = HTTP_STATUS.FULFILLED
        },
        [getArticlesByCategoryID.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload
        },
    },
});
export default articleSlice.reducer;