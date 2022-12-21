import React from 'react';
import loading from '../../assets/loader.gif';

const Loader = () => {
    return (
        <div className="d-flex justify-content-center align-items-center text-center">
            <img src={loading} alt="Loading Gif"/>
        </div>
    );
};

export default Loader;