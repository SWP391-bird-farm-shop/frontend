import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import api from "../components/utils/requestAPI";
import ComboBox from "../components/combobox/ComboBox";

const SearchPage = () => {
    const [cage, setCage] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/api/Product/get-by-category?categoryId=Cate90fb2`;
                const response = await api.get(url);
                console.log(response.data);
                setCage(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const [food, setFood] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/api/Product/get-by-category?categoryId=Cate7646a`;
                const response = await api.get(url);
                console.log(response.data);
                setFood(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const [toy, setToy] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `/api/Product/get-by-category?categoryId=Catef5d6d`;
                const response = await api.get(url);
                console.log(response.data);
                setToy(response.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    function formatCash(currency) {
        return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className="search-page">
            <h1 className="keyword">Tìm kiếm liên quan đến: Từ khóa</h1>
            <ComboBox classname='product' />
            <div className="search-product-section">
                <h2 className="search-page-title">Lồng chim</h2>
                <div className="search-product-items-section">
                    {cage?.map((product) => (
                        <Link to={`/item-info/${product.productId}`} className="search-product-item">
                            <div className="product-image">
                                {product.image.map((image) => (
                                    <img src={image.imageUrl} alt="Cage" key={image.imageId} />
                                ))}
                            </div>
                            <div className="product-details">
                                <h4 className="product-title">{product.productName}</h4>
                                <p className="product-price">₫{formatCash(product.price)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="search-product-section">
                <h2 className="search-page-title">Thức ăn cho chim</h2>
                <div className="search-product-items-section">
                    {food?.map((product) => (
                        <Link to={`/item-info/${product.productId}`} className="search-product-item">
                            <div className="product-image">
                                {product.image.map((image) => (
                                    <img src={image.imageUrl} alt="Food" key={image.imageId} />
                                ))}
                            </div>
                            <div className="product-details">
                                <h4 className="product-title">{product.productName}</h4>
                                <p className="product-price">₫{formatCash(product.price)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

            <div className="search-product-section">
                <h2 className="search-page-title">Phụ kiện - Đồ chơi</h2>
                <div className="search-product-items-section">
                    {toy?.map((product) => (
                        <Link to={`/item-info/${product.productId}`} className="search-product-item">
                            <div className="product-image">
                                {product.image.map((image) => (
                                    <img src={image.imageUrl} alt="Food" key={image.imageId} />
                                ))}
                            </div>
                            <div className="product-details">
                                <h4 className="product-title">{product.productName}</h4>
                                <p className="product-price">₫{formatCash(product.price)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SearchPage;
