import React, { useState } from "react";
import './CustomPage.css';
import { Link, useNavigate } from "react-router-dom";


const TotalPage = () => {

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleResetButtonClick = () => {
    navigate("/custom-page")
  }

  const handleConfirmButtonClick = async (event) => {
    event.preventDefault();
    const url = '';
    const data = {
      userId: auth?.user?.userId,
      styleName: name,
    };

    setIsLoading(true);

    try {
      const response = await api.post(url, data);

      if (response) {
        setSelectedStyle(styleName);
        navigate("/cart");
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    if (isLoading) {
      return;
    }
  };
  
  function formatCash(currency) {
    return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="custom-page">
      <div>
        <h1 className="custom-title">Thiết Kế Lồng</h1>
      </div>

      <div className="custom-option">
        <ul>
          <li>
            <Link to="/custom-products-shape"> Hình Dáng  </Link>
          </li>
          <li>
            <Link to="/custom-products-size"> Kích Thước </Link>
          </li>
          <li>
            <Link to="/custom-products-color">Màu Sắc  </Link>
          </li>
          <li>
            <Link to="/custom-products-material"> Chất Liệu  </Link>
          </li>
          <li>
            <Link to="/custom-products-end">Tổng Thể </Link>
          </li>
        </ul>
      </div>

      <div className="custom-summary-total">
        <div className="custom-summary-total-section">
          <div className="custom-summary-total-detail">
            <h2>Thông tin lồng</h2>
            <p>Hình dáng: <span className="custom-summary-total-detail-info">Hình vuông</span></p>
            <p>Kích thước: <span className="custom-summary-total-detail-info">100x50"</span></p>
            <p>Vật liệu: <span className="custom-summary-total-detail-info">Vàng</span></p>
            <p>Màu sắc: <span className="custom-summary-total-detail-info">Đỏ</span></p>
            <h4>Giá lồng: <span className="custom-summary-total-detail-price">₫{formatCash(50000)}</span></h4>
          </div>
          <div className="custom-summary-total-detail-button">
            <button type="submit" className="custom-summary-total-reset" onClick={handleResetButtonClick}>Thiết Lập Lại Đơn Hàng</button>
            <button type="submit" onClick={handleConfirmButtonClick} className="custom-summary-total-confirm">Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPage;