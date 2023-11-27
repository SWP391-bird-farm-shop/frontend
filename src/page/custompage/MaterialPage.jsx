import React, { useEffect, useState } from "react";
import "./CustomPage.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";

const MaterialPage = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  const { productId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [chose, setChose] = useState("");
  const [listMaterial, setListMaterial] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchData = async (size) => {
    const url = `/api/Material/get-for-custom?sizeId=${size}`;
    // const url = `/api/Material/get-for-custom?sizeId=Sif4a814d`;
    try {
      const response = await api.get(url);
      setListMaterial(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchUserCage = async () => {
    const url = "/api/ProductCustom/get-product-custom-for-user";
    const data = {
      userId: auth?.user?.userId,
      productId: productId,
    };
    console.log(data);
    try {
      const response = await api.post(url, data);
      setProduct(response.data);
      console.log(response.data);
      if (response.data) {
        fetchData(response.data.productSize);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useState(() => {
    fetchUserCage();
  }, [product]);

  const handleButtonClick = async (event, name) => {
    event.preventDefault();
    setChose(event.target.value);
    console.log(event.target.value);
    const url = "/api/ProductCustom/update-material-custom-product";
    const data = {
      userId: auth?.user?.userId,
      productId: product?.productCustomId,
      materialId: event.target.value,
    };
    setIsLoading(true);

    try {
      const response = await api.put(url, data);

      if (response) {
        navigate(`/custom-products-color/${productId}`);
        console.log(response.data);
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
          <li className="bc-grey">
            <Link to="/custom-products-material"> Chất Liệu </Link>
          </li>
          <li>
            <Link to="/custom-products-color">Màu Sắc </Link>
          </li>
        </ul>
      </div>

      <div className="custom-option-detail">
        <h2 className="custom-option-detail-title">
          Chọn Chất Liệu Lồng Của Bạn{" "}
        </h2>
        <div className="custom-choose-and-detail">
          <div className="custom-option-detail-list">
            {listMaterial?.map((material) => (
              <div className="custom-detail-item">
                <h3>{material?.materialName}</h3>
                <img
                  src={material.imageUrl}
                  alt="Chim"
                  className="custom-product-image"
                />
                <p>₫{formatCash(material?.price)}</p>
                <button
                  onClick={handleButtonClick}
                  value={material?.materialId}
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

export default MaterialPage;
