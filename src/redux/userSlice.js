import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {API_URL,HTTP_STATUS, CONFIG} from './constants';
import axios from 'axios';

export const login = createAsyncThunk(
    'user/login',
    async (value) => {
        var bodyData = new FormData();
        bodyData.append('email',value.email);
        bodyData.append('password',value.password);
        const {data} = await axios.post(`${API_URL}user/login`,bodyData,CONFIG)
        // console.log(document.cookie)
        // const res = await axios.get(`${API_URL}article`,CONFIG)
        return data;
    }
);

export const userSlice = createSlice({
    name:'user',
    initialState:{
        list:[],
        status:null,
        message:null
    },
    reducer:{},
    extraReducers:{
        [login.pending](state) {
            state.status = HTTP_STATUS.PENDING
        },
        [login.fulfilled](state, { payload }) {
            console.log(payload)
        },
        [login.rejected](state) {
            state.status = HTTP_STATUS.REJECTED
        },
    },
});

export default userSlice.reducer;