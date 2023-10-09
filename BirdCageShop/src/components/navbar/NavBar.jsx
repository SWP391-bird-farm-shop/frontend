import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './NavbarElements.jsx';
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
          <NavLink to='/products' activeStyle className='first-section-component'>
            Sản phẩm
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
        <SearchBar className='search' />
        <NavMenu className='second-section'>
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