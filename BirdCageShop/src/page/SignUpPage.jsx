import React, { Fragment, useState } from 'react';
import './SignUpPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  return (
    <Fragment>
      <div className="sign-up-section">
        <a href='/home' className='homepage-link'> Về trang chủ</a>
        <div className="sign-up-container">
          <h2>Đăng ký</h2>
          <form>
            <div className="sign-up-input-container">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className='sign-up-input' />
            </div>
            <div className="sign-up-input-container">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className='sign-up-input' />
            </div>
            <div className="sign-up-input-container">
              <label htmlFor="password">Password</label>
              <input type={showPassword ? "text" : "password"} id="password" name="password" className='sign-up-input' />
              <button type="button" className="password-toggle-button" onClick={togglePasswordVisibility}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="sign-up-input-container">
              <label htmlFor="password">Password Confirm</label>
              <input type={showConfirmPassword ? "text" : "password"} id="password-confirm" name="password-confirm" className='sign-up-input' />
              <button type="button" className="confirm-password-toggle-button" onClick={toggleConfirmPasswordVisibility}>
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <button type="submit" className='sign-up-button'>Đăng ký</button>
          </form>
          <p>Bạn đã có tài khoản? <a href='/log-in'>Đăng nhập</a></p>
        </div>
      </div>
    </Fragment>
  );
}

export default SignUpPage;
