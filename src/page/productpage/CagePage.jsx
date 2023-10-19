import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '/demo.jpg'
import './ProductPage.css';

const CagePage = () => {
  const [selected, setSelected] = useState('');

  const options = [
    'Tăng dần',
    'Giảm dần',
  ];

  return (
    <div className="product-page">
      <div className="combo-box">
        <select value={selected} onChange={e => setSelected(e.target.value)}>
          <option value="">Sắp xếp theo giá</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="product-items-section">
        <Link to="/item-info" className="product-item">
          <div className="product-image">
            <img src={Img1} alt="Food" />
          </div>
          <div className="product-details">
            <h4 className="product-title">Cage Title</h4>
            <p className="product-price">$99.99</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CagePage;
