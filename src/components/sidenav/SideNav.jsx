import React from 'react';
import { Link } from 'react-router-dom';
import { FaBookOpen, FaBreadSlice, FaBullhorn, FaDove, FaEdit, FaRegEdit, FaRegCommentAlt, FaRegListAlt, FaGift, FaRegMoneyBillAlt, FaUserAlt, FaBoxes } from 'react-icons/fa';
import "./SideNav.css"

const SideNav = () => {
    return (
        // staff
        // quản lí bài viết
        // <div className="side-navbar">
        //     <Link to="/services" className='side-navbar-link'>
        //         <FaBookOpen className='side-navbar-link-icon'/> Xem bài viết
        //     </Link>
        //     <Link to="/" className='side-navbar-link'>
        //         <FaRegEdit className='side-navbar-link-icon'/> Tạo bài viết
        //     </Link>
        //     <Link to="/about" className='side-navbar-link'>
        //         <FaEdit className='side-navbar-link-icon'/> Chỉnh sửa bài viết
        //     </Link>
        // </div>

        // quản lí feedback
        // <div className="side-navbar">
        //     <Link to="/feedback" className='side-navbar-link'>
        //         <FaRegCommentAlt className='side-navbar-link-icon'/> Xem feedback
        //     </Link>
        //     <Link to="/feedback" className='side-navbar-link'>
        //         <FaEdit className='side-navbar-link-icon'/> Chỉnh sửa feedback
        //     </Link>
        // </div>

        //quản lí đơn hàng
        // <div className="side-navbar">
        //     <Link to="/order" className='side-navbar-link'>
        //         <FaRegListAlt className='side-navbar-link-icon'/> Xem đơn hàng
        //     </Link>
        //     <Link to="/announce-order" className='side-navbar-link'>
        //         <FaBullhorn className='side-navbar-link-icon'/> Thông báo đơn hàng
        //     </Link>
        // </div>

        //manager
        //quản lí sản phẩm
        // <div className="side-navbar">
        //     <Link to="/product" className='side-navbar-link'>
        //         <FaBoxes className='side-navbar-link-icon' /> Xem toàn bộ sản phẩm
        //     </Link>
        //     <Link to="/services" className='side-navbar-link'>
        //         <FaDove className='side-navbar-link-icon' /> Thêm lồng chim
        //     </Link>
        //     <Link to="/services" className='side-navbar-link'>
        //         <FaBreadSlice className='side-navbar-link-icon' /> Thêm thức ăn cho chim
        //     </Link>
        //     <Link to="/services" className='side-navbar-link'>
        //         <FaGift className='side-navbar-link-icon' /> Thêm phụ kiện - đồ chơi
        //     </Link>
        //     <Link to="/product" className='side-navbar-link'>
        //         <FaEdit className='side-navbar-link-icon' /> Chỉnh sửa toàn bộ sản phẩm
        //     </Link>
        // </div>

        //quản lí voucher
        <div className="side-navbar">
            <Link to="/voucher" className='side-navbar-link'>
                <FaRegMoneyBillAlt className='side-navbar-link-icon' /> Xem voucher
            </Link>
            <Link to="/about" className='side-navbar-link'>
                <FaRegEdit className='side-navbar-link-icon' /> Tạo voucher
            </Link>
            <Link to="/voucher" className='side-navbar-link'>
                <FaEdit className='side-navbar-link-icon' /> Chỉnh sửa voucher
            </Link>
        </div>

        //admin
        //quản lí account
        // <div className="side-navbar">
        //     <Link to="/services" className='side-navbar-link'>
        //         <FaUserAlt className='side-navbar-link-icon' /> Xem toàn bộ tài khoản
        //     </Link>
        //     <Link to="/about" className='side-navbar-link'>
        //         <FaEdit className='side-navbar-link-icon' /> Chỉnh sửa tài khoản
        //     </Link>
        // </div>
    );
};

export default SideNav;