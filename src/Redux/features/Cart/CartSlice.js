import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: JSON.parse(localStorage.getItem('cart')) ?? []
};

export const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        //TODO: reducers
        //1.The operation to be used by the Add To Cart button in the product cart "addToCard"
        //2.The operation of the button that performs the deletion function in each element in the card component "removeFromCart"
        //3.The function to be used by the Remove All button at the bottom of the Cart component "removeAll"
        //4.Operation of each "+" element in the card component "incrementProduct"
        //5.Operation of each "-" element in the card component "reduceProduct"
        addToCart(state, action) {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.cart[itemIndex].quantity += 1;
            } else {
                const product = {...action.payload, quantity: 1};
                state.cart.push(product);
            }
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart(state, action) {
            const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
            state.cart = updatedCart;
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        removeAll(state) {
            state.cart = [];
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        reduceProduct(state, action) {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (state.cart[itemIndex].quantity > 1) {
                state.cart[itemIndex].quantity -= 1;
            } else {
                const updatedCart = state.cart.filter((p) => p.id !== action.payload.id);
                state.cart = updatedCart;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        },
        incrementProduct (state, action) {
            const itemIndex = state.cart.findIndex((item) => item.id === action.payload.id);
            if (state.cart[itemIndex].quantity >= 1) {
                state.cart[itemIndex].quantity += 1;
            }
            localStorage.setItem('cart', JSON.stringify(state.cart));
        }
    }
});

export const {addToCart, removeFromCart, removeAll, reduceProduct, incrementProduct} = CartSlice.actions;
export default CartSlice.reducer;