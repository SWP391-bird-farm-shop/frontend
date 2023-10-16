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
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

        <NavMenu className='second-section'>
          <SearchBar className='search' />
          <NavLink to='/cart'>
            <FaShoppingCart className='cart-icon' />
          </NavLink>
        </NavMenu>
        <NavMenu className='third-section'>
        <NavLink to='/log-in'>
            Đăng nhập
          </NavLink>
          <NavLink to='/sign-up'>
            Đăng ký
          </NavLink>
        </NavMenu>
      </Nav>
    </nav>
  );
};

export default Navbar;