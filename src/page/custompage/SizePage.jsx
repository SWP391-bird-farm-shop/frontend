import React, { useEffect, useState } from "react";
import "./CustomPage.css";
import ComboBox from "../../components/combobox/ComboBox";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";

const SizePage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [ListSize, setListSize] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchUserCage = async () => {
    const url = `/api/ProductCustom/get-product-custom-for-user?UserId=${auth?.user?.userId}`;
    try {
      const response = await api.get(url);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserCage();
  });

  const handleButtonClick = async (event, name) => {
    event.preventDefault();
    const url = "";
    const data = {
      userId: auth?.user?.userId,
      styleName: name,
    };

    setIsLoading(true);

    try {
      const response = await api.post(url, data);

      if (response) {
        setSelectedStyle(styleName);
        navigate("/custom-products-material");
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
      <h2 className="custom-title">Thiết Kế Lồng</h2>
      <div className="custom-option">
        <ul>
          <li>
            <Link to="/custom-products-shape"> Hình Dáng </Link>
          </li>
          <li>
            <Link to="/custom-products-size"> Kích Thước </Link>
          </li>
          <li>
            <Link to="/custom-products-material"> Chất Liệu </Link>
          </li>
          <li>
            <Link to="/custom-products-color">Màu Sắc </Link>
          </li>
          <li>
            <Link to="/custom-products-end">Tổng Thể </Link>
          </li>
        </ul>
      </div>

      <div className="custom-option-detail">
        <h2 className="custom-option-detail-title">
          Chọn Kích Thuớc Lồng Của Bạn{" "}
        </h2>
        <div className="custom-choose-and-detail">
          <div className="custom-option-detail-list">
            <div className="custom-detail-item">
              <h3> Thanh Đan: 5 </h3>
              <img
                src="public\Panel\5.jpg"
                alt="Chim"
                className="custom-product-image"
              />
              <ComboBox classname="size" />
              <button onClick={handleButtonClick} className="choose-button">
                Chọn
              </button>
            </div>
            <div className="custom-detail-item">
              <h3> Thanh Đan: 6 </h3>
              <img
                src="public\Panel\6.jpg"
                alt="Chim"
                className="custom-product-image"
              />
              <ComboBox classname="size" />
              <button onClick={handleButtonClick} className="choose-button">
                Chọn
              </button>
            </div>
            <div className="custom-detail-item">
              <h3> Thanh Đan: 8 </h3>
              <img
                src="public\Panel\8.jpg"
                alt="Chim"
                className="custom-product-image"
              />
              <ComboBox classname="size" />
              <button onClick={handleButtonClick} className="choose-button">
                Chọn
              </button>
            </div>
          </div>

          <div className="custom-summary">
            <div className="custom-summary-detail">
              <h2>Thông tin lồng</h2>
              <p>
                Hình dáng: <span>Hình vuông</span>
              </p>
              <p>
                Kích thước: <span>100x50"</span>
              </p>
              <p>
                Vật liệu: <span>Vàng</span>
              </p>
              <p>
                Màu sắc: <span>Đỏ</span>
              </p>

              <h4>Giá Hiện Tại: ₫{formatCash(50000)}</h4>
            </div>

            <div className="custom-summary-reset">
              <button type="submit">Thiết Lập Lại Đơn Hàng</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SizePage;
