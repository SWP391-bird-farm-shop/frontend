import React from 'react';
import Img1 from '/demo.jpg'
import Carousel from '../components/carousel/Carousel';
import Feedback from '../components/feedback/Feedback';
import QuantityButton from '../components/button/QuantityButton';
import './ItemInformationPage.css';

const ItemInformation = () => {
  return (
    <div className="product-information-layout">
      <div className="product-information-container">
        <div className="product-information-image">
          <img src={Img1} alt="Food" />
        </div>
        <div className="product-information-summary">
          <h2 className="product-information-title">Cage Title</h2>
          <p className="product-information-price">$99.99</p>
          <p className="product-information-description">Cage description goes here.</p>
          <QuantityButton />
          <button className="add-to-cart">Thêm vào giỏ hàng</button>
        </div>
      </div>

      <div className="product-information-detail">
        <h4 className='product-information-detail-heading'>Mô tả sản phẩm</h4>
        <p className="product-information-detail-description">Cage description goes here.</p>
      </div>

      <Feedback />
      <Carousel />
    </div>
  );
};

export default ItemInformation;
