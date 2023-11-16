import React, { useEffect, useState } from "react";
import Img1 from "/demo.jpg";
import "./ProductPage.css";
import ComboBox from "../../components/combobox/ComboBox";
import api from "../../components/utils/requestAPI";
import { Link } from "react-router-dom";

const FoodPage = () => {
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

  function formatCash(currency) {
    return n?.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
  }

  return (
    <div className="product-page">
      {/* <ComboBox /> */}
      <div className="product-items-section">
        {food?.map((product) => (
          <Link to={`/item-info/${product.productId}`} className="product-item">
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
  );
};

export default FoodPage;
