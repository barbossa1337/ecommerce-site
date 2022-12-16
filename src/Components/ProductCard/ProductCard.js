import React from "react";
import styles from './productcard.module.scss';
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";

const ProductCard = ({product}) => {
    const navigate = useNavigate();
    const title = product?.title.slice(0, 20);
    const addProduct = () => {
        toast.success(`${product?.title.slice(0, 20)} is added to cart.`, {autoClose: 1500});
    }
    return (
        <div>
            <Card style={{width: "18rem", textAlign: "center"}} className={styles.productCard}>
                <Card.Img onClick={() => navigate(`/products/${product.id}`)} variant="top" src={product?.image}
                          className={styles.cardImg}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>$ {product?.price}</Card.Text>
                    <Button className={styles.commonBtn} onClick={addProduct}>ADD TO CART</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default ProductCard;