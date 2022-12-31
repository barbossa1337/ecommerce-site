import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    wishList: JSON.parse(localStorage.getItem('wishlist')) ?? []
}

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishList(state, action) {
            state.wishList.push(action.payload);
            localStorage.setItem('wishlist', JSON.stringify(state.wishList));
        },
        removeFromWishlist(state, action) {
            const currentWishList = state.wishList.filter(
                (product) => product?.id !== action.payload.id
            );
            state.wishList = currentWishList;
            localStorage.setItem('wishlist', JSON.stringify(state.wishList));
        },
        removeAll(state) {
            state.wishList = [];
            localStorage.setItem('wishlist', JSON.stringify(state.wishList));
        }
    }
});

export const {addToWishList, removeFromWishlist, removeAll} = wishlistSlice.actions;
export default wishlistSlice.reducer;