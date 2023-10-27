import React, { useState } from 'react';
import { Nav, NavLink, Bars, NavMenu, SubNav, SubNavItem } from './NavbarElements.jsx';
import "./ManageNavBar.css"
import { FaShoppingCart, FaSignOutAlt, FaUserEdit } from 'react-icons/fa';
import SearchBar from '../search/SearchBar.jsx';
import useAuth from '../../hooks/useAuth.jsx';

const ManageNavbar = ({ className }) => {

    const [showSubNav, setShowSubNav] = useState(false);

    const handleImgClick = () => {
        setShowSubNav(!showSubNav);
    };

    const { auth } = useAuth();
    if (auth.user) {
        const Logout = () => {
            localStorage.clear();
            auth.user = null;
        }
        return (
            <nav className={`manage-navbar ${className}`}>
                <Nav id='manage-navbar'>
                    <Bars />
                    <div id="logo">
                        <a href='/home'>
                            <img src="/bcs-icon.png" alt="bcs-logo" />
                        </a>
                    </div>
                    <NavMenu className='first-section'>
                        <NavLink to='/home' className='first-section-component'>
                            Trang chủ
                        </NavLink>
                        <NavLink className='first-section-component'>
                            Sản phẩm
                            <SubNav>
                                <SubNavItem to="/products/cages">Lồng chim</SubNavItem>
                                <SubNavItem to="/products/food">Thức ăn cho chim</SubNavItem>
                                <SubNavItem to="/products/accessories-toys">Phụ kiện - Đồ chơi</SubNavItem>
                            </SubNav>
                        </NavLink>
                        <NavLink to='/blogs' className='first-section-component'>
                            Bài viết
                        </NavLink>
                        <NavLink to='/about-us' className='first-section-component'>
                            Giới thiệu
                        </NavLink>
                    </NavMenu>
                    <NavMenu className='second-section'>
                        <SearchBar className='search' />
                        <NavLink to='/cart'>
                            <FaShoppingCart className='cart-icon' />
                        </NavLink>
                    </NavMenu>
                    <NavMenu className='third-section'>
                        <p className='manage-navbar-user-name'>{auth.user.fullName}</p>
                        <NavLink>
                            <img src='/chaomao.png' alt='' className='manage-navbar-user-img' onClick={handleImgClick} />

                            {showSubNav && (
                                <div className='manage-navbar-user-img-subnav'>
                                    <SubNavItem to='/update-info' className='manage-navbar-user-img-subnav-link'>
                                        <FaUserEdit /> Chỉnh sửa thông tin
                                    </SubNavItem>
                                    <SubNavItem to='/home' className='manage-navbar-user-img-subnav-link' onClick={Logout}>
                                        <FaSignOutAlt />
                                        Đăng xuất
                                    </SubNavItem>
                                </div>
                            )}
                        </NavLink>
                    </NavMenu>
                </Nav>
            </nav>
        );
    }


    else {
        return (
            <nav className={`manage-navbar ${className}`}>
                <Nav id='manage-navbar'>
                    <Bars />
                    <div id="logo">
                        <a href='/home'>
                            <img src="/bcs-icon.png" alt="bcs-logo" />
                        </a>
                    </div>
                    {/* staff */}
                    {/* <NavMenu className='first-role-section'>
                        <NavLink to='/blogs' className='first-section-component-staff'>
                            Quản lí bài viết
                        </NavLink>
                        <NavLink to='/feedback' className='first-section-component-staff'>
                            Quản lí feedback
                        </NavLink>
                        <NavLink to='/order' className='first-section-component-staff'>
                            Quản lí đơn hàng
                        </NavLink>
                    </NavMenu> */}

                    {/* manager */}
                    <NavMenu className='first-role-section'>
                        <NavLink to='/product' className='first-section-component-manager'>
                            Quản lí sản phẩm
                        </NavLink>
                        <NavLink to='/voucher' className='first-section-component-manager'>
                            Quản lí voucher
                        </NavLink>
                    </NavMenu>

                    {/* admin */}
                    {/* <NavMenu className='first-role-section'>
                        <NavLink to='/home' className='first-section-component-admin'>
                            Quản lí tài khoản
                        </NavLink>
                    </NavMenu> */}

                    <div className='second-role-section'>
                        <p className='manage-navbar-user-name'>Xin chao</p>
                        <NavLink>
                            <img src='/chaomao.png' alt='' className='manage-navbar-user-img' onClick={handleImgClick} />

                            {showSubNav && (
                                <div className='manage-navbar-user-img-subnav'>
                                    <SubNavItem to='/update-info' className='manage-navbar-user-img-subnav-link'>
                                        <FaUserEdit /> Chỉnh sửa thông tin
                                    </SubNavItem>
                                    <SubNavItem to='/home' className='manage-navbar-user-img-subnav-link' onClick={Logout}>
                                        <FaSignOutAlt /> Đăng xuất
                                    </SubNavItem>
                                </div>
                            )}
                        </NavLink>
                    </div>
                </Nav>
            </nav>
        );
    }
};

export default ManageNavbar;