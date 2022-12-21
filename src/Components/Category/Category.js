import React from 'react';
import cat1 from '../../assets/cat1.webp';
import cat2 from '../../assets/cat2.webp';
import cat3 from '../../assets/cat3.webp';
import cat4 from '../../assets/cat4.webp';
import styles from './category.module.scss';

const Category = () => {
    const categories = [
        {
            img: cat1,
            name: "electronics",
            id: 1
        },
        {
            img: cat2,
            name: "jewelery",
            id: 2
        },
        {
            img: cat3,
            name: "men's clothing",
            id: 3
        },
        {
            img: cat4,
            name: "woman's clothing",
            id: 4
        }
    ]
    return (
        <div className="pt-5 container">
            <h3 className="py-2">Shop by Category</h3>
            <div className={`${styles.categoryWrapper}`}>
                {categories.map((category) => {
                        return (
                            <div key={category.id}>
                                <div className="category"
                                     style={{
                                         background: `linear-gradient(rgba(20, 20, 20, 0.3), rgba(20, 20, 20, 0.3)), url(${category.img}) no-repeat`,
                                         backgroundSize: "cover",
                                         backgroundPosition: "center"
                                     }}>
                                    <h5 className="text-white px-3">{category.name.toUpperCase()}</h5>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Category;