import React from "react";
import "./CustomPage.css";
import PopupModal from "../../components/modal/PopupModal";


const CustomPage = () => {

    const handleButtonClick = () => {
        window.location.href = "/custom-products-shape";
    };

    return (
        <div className="custom-page">
            <h1 className="custom-page-welcome">Chào mừng bạn đến với trang trí lồng chim</h1>
            <h2 className="custom-page-welcome-title">Mời bạn đặt tên cho lồng chim của mình</h2>
            <div className="custom-page-input-form">
                <form className="custom-page-form">
                    <div className="custom-page-input-container">
                        <label htmlFor="name" className='custom-page-input-container-label' >Tên lồng chim</label>
                        <input type="text" id="name" name="name" className='custom-page-input' required />
                    </div>
                    <button onClick={handleButtonClick} type="submit" className="choose-button">
                        Xác nhận
                    </button>
                </form>
            </div>
            <PopupModal />

        </div>
    );
};

export default CustomPage;
