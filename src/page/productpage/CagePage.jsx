import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../components/utils/requestAPI";
import ComboBox from "../../components/combobox/ComboBox";
import "./ProductPage.css";

const CagePage = () => {
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

  function formatCash(currency) {
    return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="product-page">
      <ComboBox classname='product'/>

      <div className="product-items-section">
        {cage?.map((product) => (
          <Link to={`/item-info/${product.productId}`} className="product-item">
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
  );
};

export default CagePage;
