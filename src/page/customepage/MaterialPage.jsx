import React from "react";
import './SizePage.css';

const SizePage = () => {
  const handleButtonClick = () => {
    window.location.href = "/custom-products-size";
  };

  return (
    <div className="custom">

      <div>
        <h1 className="custom-title">Thiết Kế Lồng</h1>
      </div>

      <div className="custom-option">
        <ul>

          <li>
            <a href="/custom-products-shape"> Hình Dáng  </a>
          </li>
          <li>
            <a href="/custom-products-size"> Kích Thước </a>
          </li>
          <li>
            <a href="/custom-products-color">Màu Sắc  </a>
          </li>
          <li>
            <a href="/custom-products-material"> Chất Liệu  </a>
          </li>
          <li>
            <a href="/custom-products-end">Tổng Thể </a>
          </li>
        </ul>
      </div>

      <div className="custom-size-option-detail">
        <div>
          <h2>Chọn Màu Sắc Lồng Của Bạn </h2>
        </div>
        <div className="custom-size-option-detail-list">
          <div className="custom-size-detail-item">
            <h2> Màu Đen </h2>
            <p> <img src="public\Longhinhtru.jpg" alt="Chim" className="custom-size-product-image" /> </p>

            <button onClick={handleButtonClick} className="size-button">Chọn</button>
          </div>
          <div className="custom-size-detail-item">
            <h2> Màu Gỗ </h2>
            <p> <img src="public\Longhinhtru.jpg" alt="Chim" className="custom-size-product-image" /> </p>

            <button onClick={handleButtonClick} className="size-button">Chọn</button>
          </div>
          <div className="custom-size-detail-item">
            <h2> Màu Trắng </h2>
            <p> <img src="public\Longhinhtru.jpg" alt="Chim" className="custom-size-product-image" /> </p>

            <button onClick={handleButtonClick} className="size-button">Chọn</button>
          </div>

        </div>

        <div className="custom-bill-size">
          <div className="custom-bill-detail-size">
            <h2>Đơn Hàng Của Bạn</h2><br />
            <strong>Loại chim:</strong> Chim Chích Chòe  <br />
            <strong>Kích thước:</strong> 100x50"    <br /><br />
            <h4>Giá Hiện Tại: 5000$</h4>
          </div>

          <div className="custom-cancel-size">
            <button type="submit">Thiết Lập Lại Đơn Hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SizePage;