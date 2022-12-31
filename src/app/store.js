import {configureStore} from "@reduxjs/toolkit";
import CartReducer from '../Redux/features/Cart/CartSlice';
import ProductReducer from '../Redux/features/Product/ProductSlice';
import WishlistReducer from '../Redux/features/Wishlist/WishlistSlice';

export const store = configureStore({
    reducer: {
        products: ProductReducer,
        cart: CartReducer,
        wishlist: WishlistReducer
    }
})