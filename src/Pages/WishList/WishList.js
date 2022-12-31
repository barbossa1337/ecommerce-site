import React from "react";
import styles from './wishlist.module.scss';
import {useDispatch, useSelector} from "react-redux";
import ProductCard from "../../Components/ProductCard/ProductCard";
import noitem from '../../assets/noitem.jpg';
import {removeAll} from "../../Redux/features/Wishlist/WishlistSlice";

const WishList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.wishlist);
    const content =
        products?.wishList?.length > 0 ? (
            products?.wishList?.map((product) => {
                return <ProductCard key={product?.id} product={product}/>;
            })
        ) : (
            <div className='text-center'>
                <img src={noitem} alt="wishlist empty"/>
            </div>
        )
    return (
        <div className="container">
            <div className={styles.wishListWrapper}>
                <h2 className='text-center py-2'>My Wish List</h2>
                <div className={products?.wishList.length > 0 ? styles.wishListItemWrapper : ''}>
                    {content}
                </div>
                {products?.wishList?.length > 0 && (
                    <button className={styles.wishListBtn} onClick={() => dispatch(removeAll())}>
                        Remove all from wish list
                    </button>
                )}
            </div>
        </div>
    );
}

export default WishList;