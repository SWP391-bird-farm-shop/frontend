import React, { useState, useEffect } from "react";
import Slide1 from "/Slide 1.png";
import Slide2 from "/Slide 2.png"
// import Slide1 from "https://firebasestorage.googleapis.com/v0/b/bscswp.appspot.com/o/localImage%2FSlide%201.png?alt=media&token=f99b6508-7d41-4f3f-8d8b-d7efb52f7132";
// import Slide2 from "https://firebasestorage.googleapis.com/v0/b/bscswp.appspot.com/o/localImage%2FSlide%202.png?alt=media&token=5f8b94ff-9a37-43e9-8a75-82445a61aec6";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import "./Slider.css";
import { Link } from "react-router-dom";

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [Slide1, Slide2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length]);

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
                <div className="custom-product-box-section">
                    <Link to="/custom-cage" className="custom-product-box">
                        <img className="custom-product-box-image" src="/customcage.png" alt="custom-product" />
                        {/* <img className="custom-product-box-image" src="https://firebasestorage.googleapis.com/v0/b/bscswp.appspot.com/o/localImage%2Fcustomcage.png?alt=media&token=69fe3d2d-a1bb-4358-b442-d8e8aaf6c6f3" alt="custom-product" /> */}
                        <h3 className="custom-product-box-heading">Thiết kế lồng chim</h3>
                        <h3 className="custom-product-box-heading">theo sở thích của bạn</h3>
                    </Link>
                </div>
            </div>
        </div>
  );
};

export default Slider;
