import React, { useState } from "react";
import "./VoucherPage.css"
import { FaTrashAlt } from "react-icons/fa";

const VoucherPage = () => {

    return (
        <div className="voucher-page">
            <div className="voucher-page-info">
                <h3 className="voucher-name">Voucher 1</h3>
                <div className="voucher-page-info-des">
                    <h4 className="voucher-des-title">Mô tả</h4>
                    <p className="voucher-des">Giảm 10% tổng giá trị sản phẩm</p>
                </div>
                <div className="voucher-page-info-discount">
                    <h4 className="voucher-discount-title">Giá trị giảm</h4>
                    <p className="voucher-discount">10%</p>
                </div>
                <div className="voucher-page-info-date">
                    <p className="voucher-date">Ngày tạo: 20/09/2023</p>
                    <p className="voucher-date">Ngày hết hạn: 27/10/2023</p>
                </div>
            </div>
        </div>

        // xóa voucher
        // <div className="voucher-page">
        //     <button className="remove-button"><FaTrashAlt /></button>
        //     <div className="voucher-page-info">
        //         <h3 className="voucher-name">Voucher 1</h3>
        //         <p className="voucher-des">Giảm 10% tổng giá trị sản phẩm</p>
        //     </div>
        // </div>
    );
}

export default VoucherPage;