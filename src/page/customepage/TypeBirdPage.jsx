import React, { useState } from "react";
import './TypeBirdPage.css';

const TypeBirdPage = () => {

  const handleButtonClick = () => {
    window.location.href = "/custom-products-shape";
  };
  return (
    <div className="custom">
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
            <a href=""> Phụ kiện </a>
          </li>
          <li>
            <a href="/custom-products-end">Tổng Thể </a>
          </li>
        </ul>
      </div>

      <div className="container">
        <div className="custom-option-detail">
          <div className="custom-text">
            <h2>Chọn Loại Chim</h2>
          </div>

          <div className="custom-product-grid">
            <div className="detail-item">
              <h2> Chim Bồ Câu </h2>
              <div className="image-frame">
                <img src="bocau.jpg" alt="Chim" className="product-image" />
              </div>
              <button onClick={handleButtonClick}>Chọn</button>
            </div>
            <div className="detail-item">
              <h2> Chim Chích Chòe </h2>
              <div className="image-frame">
                <img src="chichchoe.webp" alt="Chim" className="product-image" />
              </div>
              <button onClick={handleButtonClick}>Chọn</button>
            </div>
            <div className="detail-item">
              <h2> Chim Chào Mào </h2>
              <div className="image-frame">
                <img src="chaomao.png" alt="Chim" className="product-image" />
              </div>
              <button onClick={handleButtonClick}>Chọn</button>
            </div>
            {/* Add more product items as needed */}
          </div>
          <div className="button-save">SAVE & CONTINUE</div>
        </div>

        <div className="custom-bill">
          <div className="custom-bill-text">
            <h2>Sự Lựa Chọn Của Bạn</h2>
          </div>
          <div className="custom-bill-detail">
            <h2>Đơn Hàng Của Bạn</h2><br />
            <strong>Loại chim:</strong>Chim Chích Chòe  <br />
            <strong>Kích thước:</strong>100x50"    <br /><br />
            <h4>Giá Hiện Tại: 5000$</h4>
            <div className="custom-cancel">
              <button type="submit">Thiết Lập Lại Đơn Hàng</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}

export default TypeBirdPage;