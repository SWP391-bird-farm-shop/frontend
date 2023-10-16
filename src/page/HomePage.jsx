import React, { Fragment } from "react";
import "./HomePage.css";
import Slider from "../components/slider/Slider.jsx";
import Carousel from "../components/carousel/Carousel.jsx";
import Article from "../components/article/Article";


const HomePage = () => {
    return (
        <Fragment>
            <Slider />
            <div className="home-page-carousel-section">
                <h3>Loài chim</h3>
                <Carousel />
                <h3>Lồng chim</h3>
                <Carousel />
                <h3>Phụ kiện - Đồ chơi</h3>
                <Carousel />
            </div>
            <Article />
        </Fragment>
    )
}

export default HomePage;