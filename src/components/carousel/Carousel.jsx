import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css'

const Carousel = ({ className }) => {

    if (className === 'Bird') {
        const [birdData, setBirdData] = useState();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://localhost:7116/api/Bird/get-for-sort', {
                        headers: {
                            'accept': '*/*'
                        }
                    });
                    setBirdData(response.data.data);
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }, []);


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
            <OwlCarousel className={className} {...options}>
                {birdData?.map(bird => (
                    <a href={`/bird/${bird.birdId}`} className="bird-carousel-item" key={bird.birdId}>
                        {bird.image.map(image => (
                            <img src={image.imageUrl} alt={bird.birdName} key={image.imageId} />
                        ))}
                        <h4>{bird.birdName}</h4>
                    </a>
                ))}
            </OwlCarousel>

        );
    }
    if (className === 'Product') {
        const [productData, setProductData] = useState();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://localhost:7116/api/Product/get-for-customer', {
                        headers: {
                            'accept': '*/*'
                        }
                    });
                    setProductData(response.data.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }, []);
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
            <OwlCarousel className={className} {...options}>
                {productData?.map(product => (
                    <a href={`/bird/${product.productId}`} className="product-carousel-item" key={product.productId}>
                        {product.image.map(image => (
                            <img src={image.imageUrl} alt={product.productName} key={image.imageId} />
                        ))}
                        <h4>{product.productName}</h4>
                    </a>
                ))}
            </OwlCarousel>
        );
    }
    if (className === 'Toy') {
        const [toyData, setToyData] = useState();
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('https://localhost:7116/api/Product/get-by-category?categoryId=Catef5d6d', {
                        headers: {
                            'accept': '*/*'
                        }
                    });
                    setToyData(response.data.data);
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }, []);
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
            <OwlCarousel className={className} {...options}>
                {toyData?.map(toy => (
                    <a href={`/bird/${toy.productId}`} className="product-carousel-item" key={toy.productId}>
                        {toy.image.map(image => (
                            <img src={image.imageUrl} alt={toy.productName} key={image.imageId} />
                        ))}
                        <h4>{toy.productName}</h4>
                    </a>
                ))}
            </OwlCarousel>
        );
    }
};

export default Carousel;
