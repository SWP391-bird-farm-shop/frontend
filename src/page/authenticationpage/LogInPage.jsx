import React, { useState } from 'react';
import './AuthenticationPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='authentication-section'>
            <a href='/home' className='homepage-link'> Về trang chủ</a>
            <div className="authentication-container">
                <h2>Đăng nhập</h2>
                <form>
                    <div className="authentication-input-container">
                        <label htmlFor="email" className='authentication-input-container-label'>Email</label>
                        <input type="email" id="email" name="email" className='authentication-input' required/>
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="password" className='authentication-input-container-label'>Mật khẩu</label>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className='authentication-input' required/>
                        <button type="button" className="log-in-password-toggle-button" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <a href='/question' className='forgot-password-link'>Quên mật khẩu?</a>
                    <button type="submit" className='authentication-button'>Đăng nhập</button>
                </form>
                <p>Chưa có tài khoản đăng nhập? <a href='/sign-up'>Đăng ký</a></p>
            </div>
        </div>
    );
}

export default LogInPage;
