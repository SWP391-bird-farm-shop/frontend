import React, { useEffect, useState } from 'react';
import Img1 from '/demo.jpg'
import Carousel from '../components/carousel/Carousel';
import Feedback from '../components/feedback/Feedback';
import { FaMinus, FaPlus } from "react-icons/fa";
import '../components/button/QuantityButton.css'
import './ItemInformationPage.css';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../components/utils/requestAPI';
import useAuth from '../hooks/useAuth';

const ItemInformation = () => {

  const { auth } = useAuth();

  const { productId } = useParams();
  const [order, setOrder] = useState(null);
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState('');

  const [quantity, setQuantity] = useState(1);
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1}-${current.getDate()}`;
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const url = `/api/Product/get-by-id?id=${productId}`;
      try {
        const response = await api.get(url);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [productId]);

  useEffect(() => {
    if (product && product.quantity != null && product.quantity > 0) {
      setMessage('Sản phẩm có sẵn');
    } else {
      setMessage('Hết hàng');
    }
  }, [product]);

  const handleSubmit = async () => {
    if (order === null) {
      const url = '/api/Order/create-new';
      const userid = auth.user.useriId;
      const data = {
        userID: userid,
        note: "string",
        createDate: date,
        total: 0
      };
      try {
        const response = await api.post(url, data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    } else {
      console.log(order);
      const url = '/api/OrderDetail/create-new';
      const data = {
        orderId: order[0].orderId,
        productId: productId,
        feedbackId: null,
        quantity: quantity
      }
      try {
        const response = await api.post(url, data);
        console.log(response)
      } catch (error) {
        console.error(error);
      }
    }
  }

  useEffect(() => {
    const fecthData = async () => {
      if (auth.user) {
        const userid = auth.user.userId;
        console.log(userid);
        console.log(date)
        const url = '/api/Order/get-not-paid';
        const data = {
          userID: userid,
        };
        try {
          const response = await api.post(url, data);
          setOrder(response.data);
        } catch (error) {
          console.error(error);
        }
      }
      else
        navigate('/log-in')
    }
    fecthData();
  }, [])

  return (
    <div className="product-information-layout">
      <div className="product-information-container">
        <div className="product-information-image">
          <img src={Img1} alt="Food" />
        </div>
        <div className="product-information-summary">
          <h2 className="product-information-title">{product?.productName}</h2>
          <p className="product-information-price">{product?.price}</p>
          <p className="product-information-description">{product?.description}</p>
          <div className="quantity-section">
            <div className="quantity">
              <button className="quantity-button left" onClick={decrementQuantity}><FaMinus className="quantity-icon" /></button>
              <input className="quantity-number" type="number" value={quantity} readOnly />
              <button className="quantity-button right" onClick={incrementQuantity}><FaPlus className="quantity-icon" /></button>
            </div>
            <p className="quantity-inventory">{message}</p>
          </div>
          <button className="add-to-cart" onClick={handleSubmit}>Thêm vào giỏ hàng</button>
        </div>
      </div>

      <div className="product-information-detail">
        <h4 className='product-information-detail-heading'>Mô tả sản phẩm</h4>
        <p className="product-information-detail-description">{product?.description}</p>
      </div>

      <Feedback />
      <div className="different-products-carousel">
        <h3 className='different-products-carousel-heading'>Các sản phẩm tương tự</h3>
        <Carousel />
      </div>
    </div>
  );
};

export default ItemInformation;
