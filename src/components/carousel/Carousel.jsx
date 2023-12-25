import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../components/utils/requestAPI';
import OwlCarousel from 'react-owl-carousel';
import useAuth from '../../hooks/useAuth';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Carousel.css'

const Carousel = ({ className }) => {
    const { auth } = useAuth();

    const [birdData, setBirdData] = useState();
    const [cageData, setCageData] = useState();
    const [foodData, setFoodData] = useState();
    const [toyData, setToyData] = useState();


    useEffect(() => {
        if (className === 'Bird') {
            const fetchData = async () => {
                try {
                    await api.get('/api/Bird/get-for-sort', {
                        headers: {
                            'accept': '*/*'
                        }
                    }).then(response => {
                        console.log(response)
                        setBirdData(response.data);
                    });
                } catch (error) {
                    console.error(error);
                }
            };

            fetchData();
        }
        if (className === 'Cage') {
            const fetchData = async () => {
                try {
                    await api.get('api/Product/get-by-category?categoryId=Cate90fb2', {
                        headers: {
                            'accept': '*/*'
                        }
                    }).then(response => {
                        console.log(response)
                        setCageData(response.data);
                    });
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
        if (className === 'Food') {
            const fetchData = async () => {
                try {
                    await api.get('api/Product/get-by-category?categoryId=Cate7646a', {
                        headers: {
                            'accept': '*/*'
                        }
                    }).then(response => {
                        console.log(response)
                        setFoodData(response.data);
                    });
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
        if (className === 'Toy') {
            const fetchData = async () => {
                try {
                    await api.get('/api/Product/get-by-category?categoryId=Catef5d6d', {
                        headers: {
                            'accept': '*/*'
                        }
                    }).then(response => {
                        console.log(response)
                        setToyData(response.data);
                    });
                } catch (error) {
                    console.error(error);
                }
            };
            fetchData();
        }
    }, [])

    function formatCash(currency) {
        return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

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

    if (auth?.user?.roleId === '2') {
        if (className === 'Cage') {
            return (
                <OwlCarousel className={className} {...options}>
                    {cageData?.map(cage => (
                        <Link to={`/manager/item-info/view-info/${cage.productId}`} className="product-carousel-item" key={cage.productId}>
                            {cage.image.map(image => (
                                <img src={image.imageUrl} alt={cage.productName} key={image.imageId} />
                            ))}
                            <h4>{cage.productName}</h4>
                            <p>₫{formatCash(cage.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
        if (className === 'Food') {
            return (
                <OwlCarousel className={className} {...options}>
                    {foodData?.map(food => (
                        <Link to={`/manager/item-info/view-info/${food.productId}`} className="product-carousel-item" key={food.productId}>
                            {food.image.map(image => (
                                <img src={image.imageUrl} alt={food.productName} key={image.imageId} />
                            ))}
                            <h4>{food.productName}</h4>
                            <p>₫{formatCash(food.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
        if (className === 'Toy') {
            return (
                <OwlCarousel className={className} {...options}>
                    {toyData?.map(toy => (
                        <Link to={`/manager/item-info/view-info/${toy.productId}`} className="product-carousel-item" key={toy.productId}>
                            {toy.image.map(image => (
                                <img src={image.imageUrl} alt={toy.productName} key={image.imageId} />
                            ))}
                            <h4>{toy.productName}</h4>
                            <p>₫{formatCash(toy.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
    } else {
        if (className === 'Bird') {
            return (
                <OwlCarousel className={className} {...options}>
                    {birdData?.map(bird => (
                        <Link to={`/bird/${bird.birdId}`} className="bird-carousel-item" key={bird.birdId}>
                            {bird.image.map(image => (
                                <img src={image.imageUrl} alt={bird.birdName} key={image.imageId} />
                            ))}
                            <h4>{bird.birdName}</h4>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
        if (className === 'Cage') {
            return (
                <OwlCarousel className={className} {...options}>
                    {cageData?.map(cage => (
                        <Link to={`/item-info/${cage.productId}`} className="product-carousel-item" key={cage.productId}>
                            {cage.image.map(image => (
                                <img src={image.imageUrl} alt={cage.productName} key={image.imageId} />
                            ))}
                            <h4>{cage.productName}</h4>
                            <p>₫{formatCash(cage.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
        if (className === 'Food') {
            return (
                <OwlCarousel className={className} {...options}>
                    {foodData?.map(food => (
                        <Link to={`/item-info/${food.productId}`} className="product-carousel-item" key={food.productId}>
                            {food.image.map(image => (
                                <img src={image.imageUrl} alt={food.productName} key={image.imageId} />
                            ))}
                            <h4>{food.productName}</h4>
                            <p>₫{formatCash(food.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
        if (className === 'Toy') {
            return (
                <OwlCarousel className={className} {...options}>
                    {toyData?.map(toy => (
                        <Link to={`/item-info/${toy.productId}`} className="product-carousel-item" key={toy.productId}>
                            {toy.image.map(image => (
                                <img src={image.imageUrl} alt={toy.productName} key={image.imageId} />
                            ))}
                            <h4>{toy.productName}</h4>
                            <p>₫{formatCash(toy.price)}</p>
                        </Link>
                    ))}
                </OwlCarousel>
            );
        }
    }
};

export default Carousel;
