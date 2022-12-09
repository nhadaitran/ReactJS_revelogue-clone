import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL, HTTP_STATUS } from "./constants";
import axios from "axios";
import { LocalConvenienceStoreOutlined } from "@mui/icons-material";
axios.defaults.withCredentials = true;
let axiosConfig = {
  withCredentials: true,
};
export const login = createAsyncThunk(
  "user/login",
  async (value, { rejectWithValue }) => {
    var bodyData = new FormData();
    bodyData.append("email", value.email);
    bodyData.append("password", value.password);
    try {
      const { data } = await axios.post(
        `${API_URL}user/login`,
        bodyData,
        axiosConfig
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "user/register",
  async (value, { rejectWithValue }) => {
    var bodyData = new FormData();
    bodyData.append("fullname", value.fullname);
    bodyData.append("username", value.username);
    bodyData.append("sex", value.sex);
    bodyData.append("email", value.email);
    bodyData.append("password", value.password);
    try {
      const { data } = await axios.post(
        `${API_URL}user/register`,
        bodyData,
        axiosConfig
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async () => {
  const { data } = await axios.delete(`${API_URL}user/logout`);
  return data;
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    info: null,
    status: null,
    message: null,
  },
  extraReducers: {
    // login
    [login.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [login.fulfilled](state, { payload }) {
      state.info = payload.auth;
      state.status = HTTP_STATUS.FULFILLED;
      state.message = null;
      document.cookie = "accessToken=" + payload._token + ";  path=/";
    },
    [login.rejected](state, { error }) {
      state.status = HTTP_STATUS.REJECTED;
      state.message = error;
    },

    // register
    [register.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [register.fulfilled](state, { payload }) {
      state.info = payload.auth;
      state.status = HTTP_STATUS.FULFILLED;
      state.message = null;
      document.cookie = "accessToken=" + payload._token + ";  path=/";
    },
    [register.rejected](state, { error, payload }) {
      state.status = HTTP_STATUS.REJECTED;
      state.message = payload.msg || error;
    },

    // logout
    [logout.pending](state) {
      state.status = HTTP_STATUS.PENDING;
    },
    [logout.fulfilled](state) {
      state.info = null;
      state.message = null;
      state.status = null;
    },
    [logout.rejected](state) {
      state.status = HTTP_STATUS.REJECTED;
      state.message = null;
    },
  },
});

export default userSlice.reducer;
