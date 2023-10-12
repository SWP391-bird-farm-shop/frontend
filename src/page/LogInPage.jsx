import React, { useState } from 'react';
import './LogInPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LogInPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className='log-in-section'>
            <a href='/home' className='homepage-link'> Về trang chủ</a>
            <div className="log-in-container">
                <h2>Đăng nhập</h2>
                <form>
                    <div className="log-in-input-container">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" className='log-in-input' required/>
                    </div>
                    <div className="log-in-input-container">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className='log-in-input' required/>
                        <button type="button" className="password-toggle-button" onClick={togglePasswordVisibility}>
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    <button type="submit" className='log-in-button'>Đăng nhập</button>
                </form>
                <p>Chưa có tài khoản đăng nhập? <a href='/sign-up'>Đăng ký</a></p>
            </div>
        </div>
    );
}

export default LogInPage;
