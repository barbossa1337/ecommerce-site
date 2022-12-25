import React from "react";
import EmptyCart from "../../Components/EmptyCart/EmptyCart";
import {useDispatch, useSelector} from "react-redux";
import styles from './cart.module.scss';
import {incrementProduct, reduceProduct, removeAll, removeFromCart} from "../../Redux/features/Cart/CartSlice";
import {toast} from "react-toastify";

const Cart = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);
    const totalPrice = products.cart.reduce(
        (total, product) => total + product.quantity * product.price, 0
    );
    const removeProductHandler = (product) => {
        dispatch(removeFromCart(product));
        toast.warning(`${product.title.slice(0, 20)} is removed from cart!`, {autoClose: 1000});
    };
    const removeAllProducts = () => {
        dispatch(removeAll());
        toast.error('Your cart is empty now!', {autoClose: 1000});
    };
    if (products.cart.length === 0) {
        return <EmptyCart/>;
    }
    return (
        <div className="container py-5 mt-4">
            <h2 className="py-3 text-center">Cart Page</h2>
            {
                products?.cart?.map((product) => {
                    return (
                        <div key={product.id} className={styles.cartCard}>
                            <div>
                                <img src={product.image} alt={product.title} width="50px"/>
                            </div>
                            <div>
                                <h5 style={{maxWidth: "180px"}}>{product.title.slice(0, 20)}</h5>
                                <h6>${product.price}</h6>
                            </div>
                            <div>
                                <button className={`${styles.cartBtn} fw-bold`} onClick={() => {dispatch(incrementProduct(product))}}>+</button>
                                <h6>{product.quantity}</h6>
                                <button className={`${styles.cartBtn} fw-bold`} onClick={() => {dispatch(reduceProduct(product))}}>-</button>
                            </div>
                            <div>
                                <h6>${(product.price * product.quantity).toFixed(2)}</h6>
                                <button className='btn btn-danger' onClick={() => {removeProductHandler(product)}}>Remove</button>
                            </div>
                        </div>
                    )
                })
            }
            <hr/>
            <div className="mb-5 d-flex justify-content-between">
                <button className={styles.cartBtn} onClick={removeAllProducts}>Remove all products</button>
                <h5>Total Price : <b>${totalPrice.toFixed(2)}</b></h5>
            </div>
        </div>
    )
};

export default Cart;