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
  const [sizeNames, setSizeNames] = useState([]);
  const [sizeData, setSizeData] = useState([]);
  const [selectedSize, setSelectedSize] = useState(sizeData[0]?.size1);

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

  const fetchData = async () => {
    // const url = `/api/Size/get-by-style?styleid=S831874f7`;
    // try {
    // const response = await api.get(url);
    // setListSize(response.data);
    // } catch (error) {
    // console.error(error);
    // }
    const url = "/api/Size/uniqueNames";
    try {
      const response = await api.get(url);
      console.log(response.data);
      setSizeNames(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  // const url = "/api/Size/uniqueNames";
  // try {
  // const response = api.get(url);
  // console.log(response.data);
  // setSizeNames(response.data);
  // } catch (error) {
  // console.error(error);
  // }
  // });

  const fetchDataDescription = async () => {
    for (const sizeName of sizeNames) {
      const url = `/api/Size/get-by-name?SizeName=${sizeName}`;
      const response = await api.post(url);
      console.log(sizeName);
      console.log(response.data);
      setSizeData((prevSizeData) => [...prevSizeData, response.data]);
    }
  };

  useEffect(() => {
    fetchDataDescription();
  }, []);

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };
  const renderSizeOptions = () => {
    const currentSizeData = sizeData.filter((size) =>
      sizeNames.reduce((acc, sizeName) => {
        if (size.size1 === sizeName) {
          acc.push(size);
        }
        return acc;
      }, [])
    );

    currentSizeData.map((size) => {
      console.log(size);
    });

    return currentSizeData.map((size) => {
      <option key={size.sizeId} value={size.size1}>
        {size.sizeDescription} - ₫{formatCash(size.price)}
      </option>;
    });
  };

  useEffect(() => {
    // fetchUserCage();
    fetchData();
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
            {sizeNames?.map((size) => (
              <div className="custom-detail-item">
                <h3> Thanh Đan: {size} </h3>
                <img
                  src="public\Panel\5.jpg"
                  alt="Chim"
                  className="custom-product-image"
                />
                <p>{size.sizeDescription}</p>
                <select
                  value={selectedSize}
                  onChange={handleSizeChange}
                  placeholder="Chọn kích thước"
                >
                  {renderSizeOptions()}
                </select>

                <button onClick={handleButtonClick} className="choose-button">
                  Chọn
                </button>
              </div>
            ))}
          </div>

          <div className="custom-summary">
            <div className="custom-summary-detail">
              <h2>Thông tin lồng</h2>
              {/* <p>Tên sản phẩm: {product.productName}</p> */}
              <p>Hình dáng: </p>
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
