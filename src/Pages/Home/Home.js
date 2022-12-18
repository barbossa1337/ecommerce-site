import React from "react";
import ProductList from "../../Components/ProductList/ProductList";
import ProductSlider from "../../Components/Slider/ProductSlider";

const Home = () => {
    return (
    <div>Home Component
        <h2>Slider</h2>
        <h2>Category</h2>
        <ProductSlider />
        <ProductList />
    </div>
    );
}

export default Home;
