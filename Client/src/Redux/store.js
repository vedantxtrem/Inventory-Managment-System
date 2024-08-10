import {configureStore} from '@reduxjs/toolkit' 
import ProductSlice from './Slice/Product.Slice';

const store = configureStore({
    reducer:{
        product : ProductSlice,
    },
    devTools: true
})

export default store;
