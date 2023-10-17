import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css'

const Carousel = () => {
    const options = {
        items: 5, // Number of items to display
        autoplay: true, // Autoplay enabled
        autoplayTimeout: 2000, // Autoplay interval in milliseconds
        autoplayHoverPause: true, // Pause autoplay on hover
        loop: true, // Enable infinite loop
        nav: true, // Show navigation arrows
        dots: false,
        navClass: ["switch-icon-prev", "switch-icon-next"]
    };

    return (
        <OwlCarousel className='species-carousel' {...options}>
            <a href='/pigeon' className="bird-carousel-item">
                <img src="/bocau.jpg" alt="Bồ Câu" />
                <h4>Bồ Câu</h4>
            </a>
            <a href='/red-whiskered-bulbul' className="bird-carousel-item">
                <img src="/chaomao.png" alt="Chào Mào" />
                <h4>Chào Mào</h4>
            </a>
            <a href='/magpie-robin' className="bird-carousel-item">
                <img src="/chichchoe.webp" alt="Chích Chòe" />
                <h4>Chích Chòe</h4>
            </a>
            <a href='/nightingale' className="bird-carousel-item">
                <img src="/hoami.png" alt="Họa Mi" />
                <h4>Họa Mi</h4>
            </a>
            <a href='/starling' className="bird-carousel-item">
                <img src="/sao.jpg" alt="Sáo" />
                <h4>Sáo</h4>
            </a>
            <a href='/parrot' className="bird-carousel-item">
                <img src="/vet.jpg" alt="Vẹt" />
                <h4>Vẹt</h4>
            </a>
            <a href='/owl' className="bird-carousel-item">
                <img src="/cu.jpg" alt="Cú" />
                <h4>Cú</h4>
            </a>
        </OwlCarousel>

    );
};

export default Carousel;
