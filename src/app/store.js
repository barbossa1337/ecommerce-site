import {configureStore} from "@reduxjs/toolkit";
import CartReducer from '../Redux/features/Cart/CartSlice';

export const store = configureStore({
    reducer: {
        cart: CartReducer
    }
})