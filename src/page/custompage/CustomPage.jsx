import React, { useState } from "react";
import "./CustomPage.css";
import PopupModal from "../../components/modal/PopupModal";
import useAuth from "../../hooks/useAuth";
import api from "../../components/utils/requestAPI";
import { useNavigate } from "react-router-dom";

const CustomPage = () => {
  const { auth } = useAuth();

  const [name, setName] = useState("");
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleButtonClick = async (event) => {
    event.preventDefault();
    const url = "/api/ProductCustom/create-custom";
    console.log(auth);
    const data = {
      userId: auth?.user?.userId,
      productName: name,
    };

    // Set loading to true
    setIsLoading(true);

    try {
      // Call the API
      const response = await api.post(url, data);

      // If the response is successful, navigate to the next page
      if (response) {
        navigate("/custom-products-shape");
      }

      // Set loading to false
      setIsLoading(false);
    } catch (error) {
      // Handle the error
      console.error(error);
    }

    // If the request is still loading, prevent the user from clicking the button again
    if (isLoading) {
      return;
    }
  };

  return (
    <div className="custom-page">
      <h1 className="custom-page-welcome">
        Chào mừng bạn đến với trang trí lồng chim
      </h1>
      <h2 className="custom-page-welcome-title">
        Mời bạn đặt tên cho lồng chim của mình
      </h2>
      <div className="custom-page-input-form">
        <form className="custom-page-form" onSubmit={handleButtonClick}>
          <div className="custom-page-input-container">
            <label htmlFor="name" className="custom-page-input-container-label">
              Tên lồng chim
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="custom-page-input"
              placeholder="Nhập tên lồng chim"
              required
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <button type="submit" className="choose-button">Xác nhận</button>
        </form>
      </div>
      <PopupModal />
    </div>
  );
};

export default CustomPage;
