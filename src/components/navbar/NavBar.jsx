import React, { useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  SubNav,
  SubNavItem,
} from "./NavbarElements.jsx";
import "./NavBar.css";
import { FaRegListAlt, FaShoppingCart, FaSignOutAlt, FaUserEdit } from "react-icons/fa";
import SearchBar from "../search/SearchBar.jsx";
import useAuth from "../../hooks/useAuth.jsx";

const Navbar = ({ className }) => {
  const [showSubNav, setShowSubNav] = useState(false);

  const handleImgClick = () => {
    setShowSubNav(!showSubNav);
  };

  const { auth } = useAuth();
  if (auth.user) {
    const Logout = () => {
      localStorage.clear();
      auth.user = null;
      () => window.location.reload(false);
      navigate("/home");
    };
    return (
      <nav className={`navbar ${className}`}>
        <Nav id="navbar">
          <Bars />
          <div id="logo">
            <a href="/home">
              <img src="/bcs-icon.png" alt="bcs-logo" />
            </a>
          </div>
          <NavMenu className="first-section">
            <NavLink to="/home" className="first-section-component">
              Trang chủ
            </NavLink>
            <NavLink className="first-section-component">
              Sản phẩm
              <SubNav>
                <SubNavItem to="/products/cages">Lồng chim</SubNavItem>
                <SubNavItem to="/products/food">Thức ăn cho chim</SubNavItem>
                <SubNavItem to="/products/accessories-toys">
                  Phụ kiện - Đồ chơi
                </SubNavItem>
              </SubNav>
            </NavLink>
            <NavLink to="/blogs" className="first-section-component">
              Bài viết
            </NavLink>
            <NavLink to="/about-us" className="first-section-component">
              Giới thiệu
            </NavLink>
          </NavMenu>
          <NavMenu className="second-section">
            <SearchBar className="search" />
            <NavLink to="/cart">
              <FaShoppingCart className="cart-icon" />
            </NavLink>
          </NavMenu>
          <NavMenu className="third-section">
            <p className="navbar-user-name">{auth.user.fullName}</p>
            <NavLink>
              <img
                src="/chaomao.png"
                alt=""
                className="navbar-user-img"
                onClick={handleImgClick}
              />

              {showSubNav && (
                <div className="navbar-user-img-subnav">
                  <SubNavItem
                    to={`/update-info/${auth?.user?.userId}`}
                    className="navbar-user-img-subnav-link"
                  >
                    <FaUserEdit /> Chỉnh sửa thông tin
                  </SubNavItem>
                  <SubNavItem
                    to="/order-confirm"
                    className="navbar-user-img-subnav-link"
                  >
                    <FaRegListAlt /> Đơn hàng của bạn
                  </SubNavItem>
                  <SubNavItem
                    to="/home"
                    className="navbar-user-img-subnav-link"
                    onClick={Logout}
                  >
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
  } else {
    return (
      <nav className={`navbar ${className}`}>
        <Nav id="navbar">
          <Bars />
          <div id="logo">
            <a href="/home">
              <img src="/bcs-icon.png" alt="bcs-logo" />
            </a>
          </div>
          <NavMenu className="first-section">
            <NavLink to="/home" className="first-section-component">
              Trang chủ
            </NavLink>
            <NavLink className="first-section-component">
              Sản phẩm
              <SubNav>
                <SubNavItem to="/products/cages">Lồng chim</SubNavItem>
                <SubNavItem to="/products/food">Thức ăn cho chim</SubNavItem>
                <SubNavItem to="/products/accessories-toys">
                  Phụ kiện - Đồ chơi
                </SubNavItem>
              </SubNav>
            </NavLink>
            <NavLink to="/blogs" className="first-section-component">
              Bài viết
            </NavLink>
            <NavLink to="/about-us" className="first-section-component">
              Giới thiệu
            </NavLink>
          </NavMenu>

          <NavMenu className="second-section">
            <SearchBar className="search" />
            <NavLink to="/cart">
              <FaShoppingCart className="cart-icon" />
            </NavLink>
          </NavMenu>
          <NavMenu className="third-section">
            <NavLink to="/log-in">Đăng nhập</NavLink>
            <NavLink to="/sign-up">Đăng ký</NavLink>
          </NavMenu>
        </Nav>
      </nav>
    );
  }
};

export default Navbar;
