import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Img1 from '/demo.jpg'
import './ProductPage.css';
import api from '../../components/utils/requestAPI';

const CagePage = () => {
  const [selected, setSelected] = useState('');

  const [cage, setCage] = useState();

  const options = [
    'Tăng dần',
    'Giảm dần',
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        await api.get('/api/Product/get-for-customer', {
          headers: {
            'accept': '*/*'
          }
        }).then(response => {
          console.log(response)
          setCage(response.data);
        });
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [])

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
        {cage?.map(product => (
          <Link to={`/item-info/${product.productId}`} className="product-item">
            <div className="product-image">
              {product.image.map(image => (
                <img src={image.imageUrl} alt="Food" key={image.imageId} />
              ))}
            </div>
            <div className="product-details">
              <h4 className="product-title">{product.productName}</h4>
              <p className="product-price">{product.price}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
};

export default CagePage;
