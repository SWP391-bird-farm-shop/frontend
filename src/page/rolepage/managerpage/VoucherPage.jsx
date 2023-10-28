import React, { useState } from "react";
import "./VoucherPage.css"
import { FaTrashAlt } from "react-icons/fa";

const VoucherPage = () => {

    return (
        <div className="voucher-page">
            <div className="voucher-page-info">
                <h3 className="voucher-name">Voucher 1</h3>
                <p className="voucher-des">Giảm 10% tổng giá trị sản phẩm</p>
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