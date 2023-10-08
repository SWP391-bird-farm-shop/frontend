import React, { useState } from "react";
import Slide1 from "/Slide 1.png";
import Slide2 from "/Slide 2.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Slider.css";

const Slider = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const images = [
        Slide1,
        Slide2,
    ];
    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const previousImage = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="slider-section">
            <div className="slider-container">
                <button className="slider-button slider-button-left" onClick={previousImage}><FaAngleLeft className="angle-left" /></button>
                <img className="slider-image" src={images[currentImageIndex]} alt="Slider" />
                <button className="slider-button slider-button-right" onClick={nextImage}><FaAngleRight className="angle-right" /></button>
            </div>
            <div className="product-section">
                <div className="product-box-section">
                    <a href="/products" className="product-box">
                        <img className="product-box-image" src="/demo.jpg" alt="product" />
                        <h3 className="product-box-heading">Products</h3>
                    </a>
                    
                </div>
                <div className="custom-product-box-section">
                    <a href="/custom-products" className="custom-product-box">
                        <img className="custom-product-box-image" src="/demo.jpg" alt="custom-product" />
                        <h3 className="custom-product-box-heading">Custom Products</h3>
                    </a>
                    
                </div>

            </div>
        </div>
    )
}

export default Slider;