import React, { useEffect, useState } from "react";
import "./CustomPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";

const ColorPage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const [product, setProduct] = useState(null);
  const [listColor, setListColor] = useState(null);

  const current = new Date();
  const date = `${current.getFullYear()}-${
    current.getMonth() + 1
  }-${current.getDate()}`;

  const fetchUserCage = async () => {
    const url = "/api/ProductCustom/get-product-custom-for-user";
    const data = {
      userId: auth?.user?.userId,
      productId: productId,
    };
    try {
      const response = await api.post(url, data);
      console.log(response.data);
      setProduct(response.data);
      if (response.data != null) {
        fetchData();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchData = async () => {
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
    console.log(name);
    const url = "/api/ProductCustom/update-color-custom-product";
    const data = {
      userId: auth?.user?.userId,
      productId: productId,
      colorId: name,
    };

    setIsLoading(true);

    try {
      const response = await api.put(url, data);
      console.log(response.data);
      if (response.data) {
        createNewOrderCustom(response.data.price);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    if (isLoading) {
      return;
    }
  };

  //function to add new order => order custom

  const createCustomOrderDetail = async (orderId) => {
    const url = `/api/OrderDetail/create-new`;
    const data = {
      orderId: orderId,
      productId: productId,
      feedbackId: null,
      quantity: 1,
    };
    setIsLoading(true);

    try {
      const response = await api.post(url, data);
      if (response.data) navigate(`/custom-products-end/${orderId}`);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    if (isLoading) {
      return;
    }
  };

  const createNewOrderCustom = async (total) => {
    const url = "/api/Order/create-new-custom-product";
    const data = {
      userID: auth.user.userId,
      productCustomId: productId,
      note: "string",
      createDate: date,
      total: total,
    };
    setIsLoading(true);
    try {
      const response = await api.post(url, data);
      console.log(response.data);
      createCustomOrderDetail(response.data.orderId);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
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
          <li className="bc-grey">
            <Link to="/custom-products-color">Màu Sắc </Link>
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
                <button
                  onClick={(event) => handleButtonClick(event, color.colorId)}
                  className="choose-button"
                >
                  Chọn
                </button>
              </div>
            ))}
          </div>

          <div className="custom-summary">
            <div className="custom-summary-detail">
              <h2>Thông tin lồng</h2>
              {/* <p>Tên lồng: {product.productName}</p> */}
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
