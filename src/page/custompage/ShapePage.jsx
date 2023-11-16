import React, { useEffect, useState } from "react";
import "./CustomPage.css";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";
import { event } from "jquery";

const ShapePage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const [selectedStyle, setSelectedStyle] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [listStyle, setListStyle] = useState(null);

  const fetchData = async () => {
    const url = "/api/Style/get-for-custom";
    try {
      const response = await api.get(url);
      console.log(response.data);
      setListStyle(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [auth]);

  const handleButtonClick = async (event, id) => {
    event.preventDefault();
    const url = '';
    const data = {
      userId: auth?.user?.userId,
      styleName: id,
    };

    setIsLoading(true);

    try {
      const response = await api.post(url, data);

      if (response) {
        setSelectedStyle(styleId);
        navigate("/custom-products-size");
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
          Chọn Hình Dáng Lồng Của Bạn{" "}
        </h2>
        <div className="custom-choose-and-detail">
          <div className="custom-option-detail-list">
            {listStyle?.map((style) => (
              <div className="custom-detail-item">
                <h3> {style.styleName} </h3>
                <img
                  src={style.imageUrl}
                  alt="Chim"
                  className="custom-product-image"
                />
                <button onClick={(event) => handleButtonClick(event, style.styleId)} className="choose-button">
                  Chọn
                </button>
              </div>
            ))}
          </div>

          <div className="custom-summary">
            <div className="custom-summary-detail">
              <h2>Thông tin lồng</h2>
              <p>
                Hình dáng: <span>{selectedStyle}</span>
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

export default ShapePage;
