import React from "react";
import "./Footer.css"

const Footer = () => {
    return (
        <div id="footer-section">
            <div className="footer-content">
                <div className="footer-shop-section">
                    <h2 className="footer-heading">Bird Cage Shop</h2>
                    <p>Địa chỉ: 21 đường số 6, phường Linh Chiểu, TP. Thủ Đức</p>
                    <p>Điện thoại: 123 456 789 - 987 654 321</p>
                    <p>Website: </p>
                    <p>Email: birdcageshop@gmail.com</p>
                </div>

                <div className="footer-about-section">
                    <h2 className="footer-heading">Tìm hiểu</h2>
                    <p>Giới thiệu</p>
                    <p>Liên hệ</p>
                    <p>Chính sách dữ liệu</p>
                    <p>Chính sách vận chuyển</p>
                </div>

                <div className="footer-products-section">
                    <h2 className="footer-heading">Sản phẩm</h2>
                    <p>Tất cả sản phẩm</p>
                    <p>Loài chim</p>
                    <p>Lồng chim</p>
                </div>
            </div>


            <h5 className="copyright">Copyright © 2023 by Bird Cage Shop</h5>

        </div>
    )
}

export default Footer;