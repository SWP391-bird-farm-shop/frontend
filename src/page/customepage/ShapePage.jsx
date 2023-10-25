// ShapePage.js

import React from "react";
import './ShapePage.css';

const ShapePage = () => {
  const handleButtonClick = () => {
    window.location.href = "/custom-products-size";
  };

  return (
    <div className="custom ">

      <div>
        <h1 className="custom-title">Thiết Kế Lồng</h1>
      </div>

      <div className="custom-option">
        <ul>
          <li>
            <a href="/custom-products-typebirds"> Loại chim  </a>
          </li>
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
            <a href="" className="shape-accessory"> Phụ kiện </a>
          </li>
          <li>
            <a href="/custom-products-end shape-end">Tổng Thể </a>
          </li>
        </ul>
      </div>

      <div className=" shape-container">
        <div className=" shape-option-detail">
          <div className=" shape-text">
            <h2>Hình Dáng Lồng</h2>
          </div>

          <div className=" shape-product-grid">
            <div className="shape-detail">
              <h2> Lồng Dáng Vuông </h2>
              <div className=" shape-image-frame">
                <img src="bocau.jpg" alt="Chim" className=" shape-product-image" />
              </div>
              <button onClick={handleButtonClick} className="shape-button">Chọn</button>
            </div>
            <div className=" shape-detail">
              <h2>Lồng Dáng Trụ  </h2>
              <div className="shape-image-frame">
                <img src="chichchoe.webp" alt="Chim" className=" shape-product-image" />
              </div>
              <button onClick={handleButtonClick} className="shape-button">Chọn</button>
            </div>
            <div className=" shape-detail">
              <h2>Lồng Dáng Tròn </h2>
              <div className=" shape-image-frame">
                <img src="chaomao.png" alt="Chim" className=" shape-product-image" />
              </div>
              <button onClick={handleButtonClick} className="shape-button">Chọn</button>
            </div>
            {/* Add more product items as needed */}
          </div>

        </div>


        <div className=" shape-bill">
          <div className="shape-bill-detail">
            <h2>Đơn Hàng Của Bạn</h2><br />
            <strong>Loại chim:</strong> Chim Chích Chòe<br />
            <strong>Kích thước:</strong> 100x50"<br /><br />
            <h4 className="shape-price">Giá Hiện Tại: 5000$</h4>
            <div className=" shape-cancel">
              <button type="submit" className="shape-reset-button">Thiết Lập Lại Đơn Hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShapePage;
