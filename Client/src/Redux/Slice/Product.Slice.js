import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axioxInstance.helper";
import toast from 'react-hot-toast'

const initialState = {
    productData: []
}

export const getAllProduct = createAsyncThunk("product/get", async () => {
    try {
        const response = axiosInstance.get("/product");

        toast.promise(response, {
            loading: "loading course data...",
            success: "Courses loaded successfully",
            error: "Failed to get the courses",
        })

        return (await response).data.product;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const addProducdt = createAsyncThunk("addProudct", (data) => {

});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default productSlice.reducer;