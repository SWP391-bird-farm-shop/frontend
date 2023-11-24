import React, { useEffect, useState } from "react";
import "./CustomPage.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";

const ColorPage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState(null);
  const [listColor, setListColor] = useState(null);

  const fetchUserCage = async () => {
    const url = `/api/ProductCustom/get-product-custom-for-user?UserId=${auth?.user?.userId}`;
    try {
      const response = await api.get(url);
      setProduct(response.data);
      if (response.data) {
        fetchData(response.data.productMaterial);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async (material) => {
    // const url = `/api/Color/get-for-custom?materialId=${material}`;
    const url = `/api/Color/get-for-custom`;
    try {
      const response = await api.get(url);
      console.log(response.data);
      setListColor(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUserCage();
  }, []);

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
        navigate("/custom-products-end");
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
          Chọn Màu Sắc Lồng Của Bạn{" "}
        </h2>
        <div className="custom-choose-and-detail">
          <div className="custom-option-detail-list">
            {listColor?.map((color) => (
              <div className="custom-detail-item">
                <h3>{color.colorName}</h3>
                <img
                  src={color.imageUrl}
                  alt="Chim"
                  className="custom-product-image"
                />
                <button onClick={handleButtonClick} className="choose-button">
                  Chọn
                </button>
              </div>
            ))}
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

export default ColorPage;
