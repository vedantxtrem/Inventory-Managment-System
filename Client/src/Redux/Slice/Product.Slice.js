import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axioxInstance.helper";
import toast from 'react-hot-toast'

const initialState = {
    productData: [],
    loading: false,
    error: null,
}

export const getAllProduct = createAsyncThunk("product/get", async () => {
    try {
        const response = await axiosInstance.get("/product");

        toast.promise(response, {
            loading: "Loading product data...",
            success: "Products loaded successfully",
            error: "Failed to get the products",
        });

        return response.data.product;
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        throw error;
    }
});

export const addProduct = createAsyncThunk("product/add", async (data) => {
    try {
        let formData = new FormData();
        formData.append("title", data?.title);
        formData.append("description", data?.description);
        formData.append("price", data?.price);
        formData.append("inStock", data?.inStock);


        const response = await axiosInstance.post("/product", formData);
        toast.promise(response, {
            loading: "Creating new product...",
            success: "Product added successfully",
            error: "Failed to create product",
        });

        return response.data;
    } catch (error) {
        toast.error(error?.response?.data?.message || "An error occurred");
        throw error;
    }
});

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProduct.fulfilled, (state, action) => {
                if(action.payload) {
                    console.log(action.payload);
                    state.productData = [...action.payload];
                }
                
            })
    },
});

export default productSlice.reducer;
