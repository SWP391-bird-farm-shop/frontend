import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios'
import './LogInPage.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import jwtDecode from 'jwt-decode';
import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';

const LogInPage = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);


    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [authen, setAuthen] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = 'https://localhost:7116/api/User/login';
        const headers = {
            'accept': '*/*',
            'Content-Type': 'application/json-patch+json'
        };
        const data = {
            userName: username,
            password: password
        };

        try {
            const response = await axios.post(url, data);
            setAuthen(response.data.data);
            localStorage.setItem('Authen', authen);
            // Xử lý dữ liệu response ở đây
        } catch (error) {
            console.error(error);
            // Xử lý lỗi ở đây
        }
    }


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        async function fetchUserData() {
            try {
                var decode = jwtDecode(authen);
                var userid = decode.userid;
                const url = 'https://localhost:7116/api/User/get-user-information';
                const headers = {
                    'accept': '*/*',
                    'Content-Type': 'application/json-patch+json'
                };
                const data = {
                    userID: userid
                };
                const response = await axios.post(url, data);
                var user = response.data.data;
                setAuth({ user, authen });
                if (user.roleId === '4') {
                    console.log('ys');
                    navigate('/user-page');
                }
                // Xử lý dữ liệu response ở đây
            } catch (error) {
                console.error(error);
                // Xử lý lỗi ở đây
            }
        }
        fetchUserData();
    }, [authen])

    return (
        <div className='log-in-section'>
            <a href='/home' className='homepage-link'> Về trang chủ</a>
            <div className="log-in-container">
                <h2>Đăng nhập</h2>
                <form onSubmit={handleSubmit}>
                    <div className="log-in-input-container">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input type="username" id="username" name="username" className='log-in-input' onChange={(event) => setUsername(event.target.value)} required />
                    </div>
                    <div className="log-in-input-container">
                        <label htmlFor="password">Mật khẩu</label>
                        <input type={showPassword ? "text" : "password"} id="password" name="password" className='log-in-input' onChange={(event) => setPassword(event.target.value)} required />
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
