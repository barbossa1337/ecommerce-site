import React from "react";
import {NavLink} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import {AiOutlineShoppingCart} from "react-icons/ai";
import styles from "./naav.module.scss";
import {useSelector} from "react-redux";

const Naav = () => {
    const menus = [
        {
            name: "Home",
            id: 1,
            path: "/"
        },
        {
            name: "About Us",
            id: 2,
            path: "/about"
        },
        {
            name: "Wish List",
            id: 3,
            path: "/wishlist"
        }
    ]
    const {cart} = useSelector((state) => state.cart);
    return (
        <div>
            <Navbar expand="lg" className={`${styles.navBar} fixed-top`}>
                <Container>
                    <Navbar.Brand>
                        <NavLink to="/" className={`${styles.navLink} text-uppercase`}>
                            Barbossa ECommerce
                        </NavLink>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScrooll"/>
                    <Navbar.Collapse id="navbarScrooll">
                        <Nav className="ms-auto my-2 my-lg-0" style={{maxHeight: "100px"}} navbarScroll={false}>
                            {
                                menus.map((menu) => (
                                    <NavLink className={`${styles.navLink} ${styles.menuLink}`} key={menu.id} to={menu.path}>{menu.name}</NavLink>
                                ))
                            }
                            <NavLink to="/cart" className={`${styles.navLink} ${styles.cartIcon}`}>
                                <AiOutlineShoppingCart size={23}/>{" "}
                                <div className={styles.cartLength}>
                                    <h6>{cart?.length}</h6>
                                </div>
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Naav;