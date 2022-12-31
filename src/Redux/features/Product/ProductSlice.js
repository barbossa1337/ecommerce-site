import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {STATUS} from '../../../constant/Status';

const base_url = "https://fakestoreapi.com/";

const initialState = {
    status: "",
    products: []
}

const productSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = STATUS.LOADING;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = STATUS.IDLE;
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = STATUS.ERROR;
            })
    }
});

export const fetchProducts = createAsyncThunk("fetch/products", async () => {
    const data = await axios.get(`${base_url}products`)
        .then((res) => res.data);
    return data;
});

export default productSlice.reducer;