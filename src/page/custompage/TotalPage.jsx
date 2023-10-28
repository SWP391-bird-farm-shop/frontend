import React, { useState } from "react";
import './TotalPage.css';


const TotalPage = () => {

  const handleButtonClick = () => {
    window.location.href = "/cart";
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

      <div className="custom-bill">
        <div className="custom-bill-text">
          <h2>Sự Lựa Chọn Của Bạn</h2>
        </div>
        <div className="custom-bill-detail">
          <h2>Đơn Hàng Của Bạn</h2><br />
          <strong>Loại chim:</strong>Chim Chích Chòe  <br />
          <strong>Kích thước:</strong>100x50"    <br /><br />
          <h4>Giá Hiện Tại: 5000$</h4>
          <div>
            <button onClick={handleButtonClick} className="btn" type="submit">Thanh Toán</button>
          </div>
          <div className="custom-cancel">
            <button type="submit">Thiết Lập Lại Đơn Hàng</button>
          </div>
        </div>
      </div>

    </div>



  );
}


export default TotalPage;