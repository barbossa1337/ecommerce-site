import React from 'react';
import styles from "./emptycart.module.scss";
import cart from '../../assets/cart.png';
import {useNavigate} from "react-router-dom";

const EmptyCart = () => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.emptyCart}>
                <img src={cart} alt="Empty Cart Img"/>
                <button onClick={() => navigate("/")} className='btn btn-primary'>Go Back to Add Some Products</button>
            </div>
        </div>
    );
};

export default EmptyCart;