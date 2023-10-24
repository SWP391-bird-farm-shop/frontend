import React, { useState } from "react";
import './CustomePage.css';



const CustomePage = () => {

  return (
    <div className="custom">


      <div>
        <h1 className="custom-title">Thiết Kế Lồng</h1>
      </div>

      <div className="custom-option">
        <ul>
          <li>
            <a href=""> Loại chim  </a>
          </li>
          <li>
            <a href=""> Hình Dáng  </a>
          </li>
          <li>
            <a href=""> Chiều Cao </a>
          </li>
          <li>
            <a href="">Màu Sắc  </a>
          </li>
          <li>
            <a href=""> Chất Liệu  </a>
          </li>
          <li>
            <a href=""> Phụ kiện </a>
          </li>
          <li>
            <a href="">Tổng Thể </a>
          </li>
        </ul>
      </div>

      <div className="custom-option-detail">
        <div className="">
          <h2>Chọn Loại Chim</h2>
        </div>
        <div className="custom-option-detail-list">
          <div className="detail-item">
            <h2> Chim Bồ Câu </h2>
            <p> <img src="" alt="Chim" className="" /> </p>
            <button> Chọn </button>
          </div>
          <div className="detail-item">
            <h2> Chim Chích Chòe </h2>
            <p> <img src="" alt="Chim" className="" /> </p>
            <button> Chọn </button>
          </div>
          <div className="detail-item">
            <h2> Chim Chào Mào </h2>
            <p> <img src="" alt="Chim" className="" /> </p>
            <button> Chọn </button>
          </div>
        </div>


        <div className="custom-bill">

          <div className="custom-bill-detail">
            <h2>Đơn Hàng Của Bạn</h2><br />
            <strong>Loại chim:</strong>Chim Chích Chòe  <br />
            <strong>Kích thước:</strong>100x50"    <br /><br />
            <h4>Giá Hiện Tại: 5000$</h4>
          </div>

          <div className="custom-cancel">

            <button type="submit">Thiết Lập Lại Đơn Hàng</button>

          </div>

        </div>


      </div>

    </div >


  );
}

export default CustomePage;
