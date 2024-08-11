import { configureStore } from '@reduxjs/toolkit';
import productReducer from './Slice/Product.Slice.js'; // Ensure this path and name are correct

const store = configureStore({
    reducer: {
        product: productReducer, // Ensure the reducer name matches the slice name
    },
    // devTools: true is the default behavior in development mode, so it can be omitted
});

export default store;
