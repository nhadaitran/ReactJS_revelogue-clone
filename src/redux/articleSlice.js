import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL, HTTP_STATUS } from './constants';
import axios from 'axios';
axios.defaults.withCredentials = true;
export const getArticles = createAsyncThunk(
    'article/getArticles',
    async () => {
        const { data } = await axios.get(`${API_URL}article`)
        return data;
    }
);

export const getArticle = createAsyncThunk(
    'article/getArticle',
    async (value) => {
        const { data } = await axios.get(`${API_URL}article/${value}`)
        return data;
    }
);

export const getArticlesByStatus = createAsyncThunk(
    'article/getArticlesByStatus',
    async () => {
        const { data } = await axios.get(`${API_URL}article/status`)
        return data;
    }
);

export const getArticlesByCategorySlug = createAsyncThunk(
    'article/getArticlesByCategorySlug',
    async (value) => {
        const { data } = await axios.get(`${API_URL}article/category/slug/${value}`)
        return data;
    }
);

export const uploadArticle = createAsyncThunk(
    'article/uploadArticle',
    async (value) => {
        const { data } = await axios.post(`${API_URL}article`, value, { contentType: 'multipart/form-data' })
        return data;
    }
);

export const updateStatusArticle = createAsyncThunk(
    'article/updateStatusArticle',
    async (value) => {
        console.log(value)
        // const { data } = await axios.post(`${API_URL}article/status/`, value, { contentType: 'multipart/form-data' })
        // return data;
    }
);

export const saveTempArticle = createAsyncThunk(
    'article/saveTempArticle',
    async (value) => {
        return value;
    }
);

export const articleSlice = createSlice({
    name: 'article',
    initialState: {
        list: [],
        listStatus: [],
        listByCategory: [],
        tempContent: null,
        item: null,
        status: null,
        message: null
    },
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

        // getArticlesByStatus
        [getArticlesByStatus.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [getArticlesByStatus.fulfilled](state, { payload }) {
            state.listStatus = payload
            state.status = HTTP_STATUS.FULFILLED
        },
        [getArticlesByStatus.rejected](state, { payload }) {
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
        [uploadArticle.rejected](state, { error }) {
            state.status = HTTP_STATUS.REJECTED
            state.message = error
        },

        // saveTempArticle
        [saveTempArticle.pending](state) {
            state.tempContent = null;
        },
        [saveTempArticle.fulfilled](state, { payload }) {
            state.tempContent = payload
        },
        [saveTempArticle.rejected](state) {
            state.tempContent = null;
        },
    },
});
export default articleSlice.reducer;