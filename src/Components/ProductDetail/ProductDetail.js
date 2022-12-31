import React from 'react'
import {Breadcrumb} from 'react-bootstrap';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {addToCart} from '../../Redux/features/Cart/CartSlice';
import useFetch from '../../Services/usefetch';
import Loader from '../Loader/Loader';
import ProductSlider from '../Slider/ProductSlider';
import styles from './productdetail.module.scss'
import {addToWishList, removeFromWishlist} from "../../Redux/features/Wishlist/WishlistSlice";

const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const state = useSelector((state) => state.wishlist.wishList)
        .some((p) => p?.id?.toString() === id);

    const {data, error, loading} = useFetch(`/${id}`);
    if (!error && loading) {
        return <Loader/>
    }
    if (!loading && error) {
        return <h3>{error.message}</h3>
    }

    const productHandler = () => {
        dispatch(addToCart(data));
        toast.success(`${data?.title.slice(0, 20)} is added to cart`, {autoClose: 1000});
    };

    const wishListHandler = () => {
        if (state) {
            dispatch(removeFromWishlist(data));
            toast.warning(`${data?.title.slice(0, 20)} is remove from wish list`,{autoClose: 1000});
        } else {
            dispatch(addToWishList(data));
            toast.success(`${data?.title.slice(0, 20)} is added to your wish list`, {autoClose: 1000});
        }
    }
    return (
        <div className={`${styles.detailWrapper} container py-4`}>
            <Breadcrumb>
                <Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
                <Breadcrumb.Item active>{data?.title}</Breadcrumb.Item>
            </Breadcrumb>
            <h1>{data?.title}</h1>
            <hr className='mb-4'/>
            <div className={styles.mainDetailWrapper}>
                <div className={styles.imageWrapper}>
                    <img src={data?.image} alt={data?.title} style={{maxWidth: "300px", maxHeight: "300px"}}/>
                </div>
                <div className='pt-3'>
                    <h4>{data?.title}</h4>
                    <h6 className='text-success'>
                        {data?.rating.count > 1 && "In Stock"}
                    </h6>
                    <h6>Category : {data?.category}</h6>
                    <p className='py-1'>{data?.description}</p>
                    <h5>Price : ${data?.price}</h5>
                    <button onClick={productHandler} className='btn btn-primary mt-2'> Add To Cart</button>
                    <button className='btn btn-primary mt-2' onClick={() => wishListHandler()}>
                        {state? 'Remove from wishlist' : 'Add to wishlist'}
                    </button>
                </div>
            </div>
            <div className={styles.productSliderWrapper}>
                <h4 className='py-2'>Products you might also like</h4>
                <ProductSlider category={data?.category}/>
            </div>
        </div>
    )
}
export default React.memo(ProductDetail);