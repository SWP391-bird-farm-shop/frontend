import React, { useState } from "react";
import "./ProductPage.css"
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const ProductPage = () => {

    return (

        <div className="product-manager-page">
            <h2 className="product-manager-page-title">Lồng chim</h2>
            <div className="product-manager-page-section">
                <h3 className="product-name">Sản phẩm 1</h3>
                <div className="product-info">
                    <div className="product-img">
                        <img src="/bocau.jpg" alt="avatar" />
                    </div>
                    <div className="product-description">
                        <p className="product-description-title">Mô tả sản phẩm</p>
                        <p>Mô tả sản phẩm ở đây</p>
                    </div>
                    <div className="quantity-and-price">
                        <p>Đang có 200 sản phẩm</p>
                        <p>Giá tiền $99</p>
                    </div>
                </div>
            </div>

            <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
            <div className="product-manager-page-section">
                <h3 className="product-name">Sản phẩm 1</h3>
                <div className="product-info">
                    <div className="product-img">
                        <img src="/bocau.jpg" alt="avatar" />
                    </div>
                    <div className="product-description">
                        <p className="product-description-title">Mô tả sản phẩm</p>
                        <p>Mô tả sản phẩm ở đây</p>
                    </div>
                    <div className="quantity-and-price">
                        <p>Đang có 200 sản phẩm</p>
                        <p>Giá tiền $99</p>
                    </div>
                </div>
            </div>

            <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
            <div className="product-manager-page-section">
                <h3 className="product-name">Sản phẩm 1</h3>
                <div className="product-info">
                    <div className="product-img">
                        <img src="/bocau.jpg" alt="avatar" />
                    </div>
                    <div className="product-description">
                        <p className="product-description-title">Mô tả sản phẩm</p>
                        <p>Mô tả sản phẩm ở đây</p>
                    </div>
                    <div className="quantity-and-price">
                        <p>Đang có 200 sản phẩm</p>
                        <p>Giá tiền $99</p>
                    </div>
                </div>
            </div>
        </div>

        // chỉnh sửa toàn bộ sản phẩm
        // <div className="product-manager-page">
        //     <h2 className="product-manager-page-title">Lồng chim</h2>
        //     <div className="product-manager-page-section">
        //         <div className="product-manager-page-section-header">
        //             <h3 className="product-name">Sản phẩm 1</h3>
        //             <div className="role-page-edit-button">
        //                 <button className="update-button"><FaRegEdit /></button>
        //                 <button className="remove-button"><FaTrashAlt /></button>
        //             </div>
        //         </div>
        //         <div className="product-info">
        //             <div className="product-img">
        //                 <img src="/bocau.jpg" alt="avatar" />
        //             </div>
        //             <div className="product-description">
        //                 <p className="product-description-title">Mô tả sản phẩm</p>
        //                 <p>Mô tả sản phẩm ở đây</p>
        //             </div>
        //             <div className="quantity-and-price">
        //                 <p>Đang có 200 sản phẩm</p>
        //                 <p>Giá tiền $99</p>
        //             </div>
        //         </div>
        //     </div>

        //     <h2 className="product-manager-page-title">Thức ăn cho chim</h2>
        //     <div className="product-manager-page-section">
        //         <div className="product-manager-page-section-header">
        //             <h3 className="product-name">Sản phẩm 1</h3>
        //             <div className="role-page-edit-button">
        //                 <button className="update-button"><FaRegEdit /></button>
        //                 <button className="remove-button"><FaTrashAlt /></button>
        //             </div>
        //         </div>
        //         <div className="product-info">
        //             <div className="product-img">
        //                 <img src="/bocau.jpg" alt="avatar" />
        //             </div>
        //             <div className="product-description">
        //                 <p className="product-description-title">Mô tả sản phẩm</p>
        //                 <p>Mô tả sản phẩm ở đây</p>
        //             </div>
        //             <div className="quantity-and-price">
        //                 <p>Đang có 200 sản phẩm</p>
        //                 <p>Giá tiền $99</p>
        //             </div>
        //         </div>
        //     </div>

        //     <h2 className="product-manager-page-title">Phụ kiện - Đồ chơi</h2>
        //     <div className="product-manager-page-section">
        //         <div className="product-manager-page-section-header">
        //             <h3 className="product-name">Sản phẩm 1</h3>
        //             <div className="role-page-edit-button">
        //                 <button className="update-button"><FaRegEdit /></button>
        //                 <button className="remove-button"><FaTrashAlt /></button>
        //             </div>
        //         </div>
        //         <div className="product-info">
        //             <div className="product-img">
        //                 <img src="/bocau.jpg" alt="avatar" />
        //             </div>
        //             <div className="product-description">
        //                 <p className="product-description-title">Mô tả sản phẩm</p>
        //                 <p>Mô tả sản phẩm ở đây</p>
        //             </div>
        //             <div className="quantity-and-price">
        //                 <p>Đang có 200 sản phẩm</p>
        //                 <p>Giá tiền $99</p>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ProductPage;