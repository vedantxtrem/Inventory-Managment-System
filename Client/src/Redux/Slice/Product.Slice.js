import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helper/axioxInstance.helper.js";
import toast from 'react-hot-toast';

const initialState = {
    productData: [],
    loading: false,
    error: null,
};

// Async thunk to get all products
export const getAllProduct = createAsyncThunk("product/get", async () => {
    try {
        const response = axiosInstance.get("/product");

        // Show toast notifications
        toast.promise(response, {
            loading: "Loading product data...",
            success: "Products loaded successfully",
            error: "Failed to get the products",
        });

        return (await response).data.product;
    } catch (error) {
        // Handle error and show a toast
        const errorMessage = error?.response?.data?.message || "An error occurred";
        return toast.error(errorMessage);
         
    }
});

// Async thunk to add a new product
export const addProduct = createAsyncThunk("product/add", async (data) => {
    try {

        const response = axiosInstance.post("/product",data);
        
        // Show toast notifications
        toast.promise(response, {
            loading: "Creating new product...",
            success: "Product added successfully",
            error: "Failed to create product",
        });

        return (await response).data ;
        
    } catch (error) {
        // Handle error and show a toast
        const errorMessage = error?.response?.data?.message || "An error occurred";
        toast.error(errorMessage);
        toast.error(error?.response?.data?.message);
    }
});

export const deleteProduct = createAsyncThunk("/deleteProduct" , async(id)=>{
    try {
        const response = axiosInstance.delete(`/product/${id}`)
        toast.promise(response, {
            loading: "deleting course ...",
            success: "Courses deleted successfully",
            error: "Failed to delete the courses",
        });
        return (await response).data;
        
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

export const editProduct = createAsyncThunk(
    'product/editProduct',
    async (data) => {
        try {
            const response = await axiosInstance.put(`/product/${data.id}`, data);
            toast.success("Product updated successfully");
            return response.data;
        } catch (error) {
            const errorMessage = error?.response?.data?.message || "Failed to update product";
            toast.error(errorMessage);
        }
    }
);

// Product slice
const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle loading state and error state for getAllProduct
            .addCase(getAllProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getAllProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.productData = [...action.payload];
            })
            .addCase(getAllProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            
    }

});

export default productSlice.reducer;
