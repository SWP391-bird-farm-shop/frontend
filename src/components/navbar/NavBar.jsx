import React from 'react';
import { Nav, NavLink, Bars, NavMenu, SubNav, SubNavItem } from './NavbarElements.jsx';
import "./NavBar.css"
import { FaShoppingCart } from 'react-icons/fa';
import SearchBar from '../search/SearchBar.jsx';

const Navbar = ({ className }) => {
  return (
    <nav className={`navbar ${className}`}>
      <Nav id='navbar'>
        <Bars />
        <div id="logo">
          <a href='/home'>
            <img src="/bcs-icon.png" alt="bcs-logo" />
          </a>
        </div>
        <NavMenu className='first-section'>
          <NavLink to='/home' activeStyle className='first-section-component'>
            Trang chủ
          </NavLink>
          <NavLink className='first-section-component'>
            Sản phẩm
            <SubNav>
              <h3>Lồng</h3>
              <SubNavItem to="/products/category1">Lồng</SubNavItem>
              <h3>Thức ăn</h3>
              <SubNavItem to="/products/category2">Thức ăn</SubNavItem>
              <h3>Phụ kiện - Đồ chơi</h3>
              <SubNavItem to="/products/category3">Phụ kiện - Đồ chơi</SubNavItem>
            </SubNav>
          </NavLink>
          <NavLink to='/blogs' activeStyle className='first-section-component'>
            Bài viết
          </NavLink>
          <NavLink to='/about-us' activeStyle className='first-section-component'>
            Giới thiệu
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavMenu className='second-section'>
          <SearchBar className='search' />
          <NavLink to='/cart' activeStyle>
            <FaShoppingCart className='cart-icon' />
          </NavLink>
          <NavLink to='/log-in' activeStyle>
            Đăng nhập
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Đăng ký
          </NavLink>
        </NavMenu>
      </Nav>
    </nav>
  );
};

export default Navbar;