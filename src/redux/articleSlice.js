import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from './constants';
import axios from 'axios';
axios.defaults.withCredentials = true; 
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

export const getArticlesByCategorySlug = createAsyncThunk(
    'category/getArticlesByCategorySlug',
    async (value) => {
        const { data } = await axios.get(`${API_URL}article/category/slug/${value}`)
        return data;
    }
);

export const uploadArticle = createAsyncThunk(
    'category/uploadArticle',
    async (value) => {
        const { data } = await axios.post(`${API_URL}article`, value, {contentType: 'multipart/form-data'})
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
        [getArticlesByCategorySlug.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getArticlesByCategorySlug.fulfilled](state, { payload }) {
            state.listByCategory.push(payload)
            state.status = HTTP_STATUS.FULFILLED
        },
        [getArticlesByCategorySlug.rejected](state, { payload }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = payload
        },

        // uploadArticle
        [uploadArticle.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [uploadArticle.fulfilled](state, { payload }) {
            state.item = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [uploadArticle.rejected](state, { payload, error }) {
            state.status = HTTP_STATUS.REJECTED
            console.log(payload)
            console.log(error)
            // state.message = payload
        },
    },
});
export default articleSlice.reducer;