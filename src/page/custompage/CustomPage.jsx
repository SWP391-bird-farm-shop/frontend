import React, { useState } from "react";
import "./CustomPage.css";
import { Link } from "react-router-dom";


const CustomPage = () => {

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
                    <button type="submit" className="choose-button">
                        Xác nhận
                    </button>
                </form>
            </div>

        </div>
    );
};

export default CustomPage;
