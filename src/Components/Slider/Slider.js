import React from 'react';
import img1 from "../../assets/img1.webp";
import img2 from "../../assets/img2.webp";
import img3 from "../../assets/img3.webp";
import {Button, Carousel} from "react-bootstrap";
import styles from "./slider.module.scss";

const Slider = () => {
    const sliderItems = [
        {
            id: 1,
            caption: "All the Latest Product In One Place",
            img: img1
        },
        {
            id: 2,
            caption: "Grab the Latest Product",
            img: img2
        },
        {
            id: 3,
            caption: "Find All Your needs In One Place",
            img: img3
        }
    ]
    return (
        <div>
            <Carousel fade>
                {
                    sliderItems.map((item) => {
                        return (
                            <Carousel.Item key={item.id} className={styles.sliderItem}>
                                <img className="d-block w-100" src={item.img} alt="Slider" />
                                <Carousel.Caption>
                                    <h1 style={{color: "aliceblue", fontSize: "48px", lineHeight: "48px"}}>{item.caption}</h1>
                                    <p>A single place for all your products. Discover more products on our product section.</p>
                                    <Button className={styles.sliderBtn}>
                                        <a href="#product-list">Discover More</a>
                                    </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    );
};

export default Slider;