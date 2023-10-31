import React, { useState } from 'react';
import './CreateUser.css';

const CreateUser = () => {
    const [userData, setUserData] = useState({
        username: '',
        password: '',
        confirmPassword: '',
        fullName: '',
        gender: 'male',
        birthDate: '',
        address: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle user creation here using the data in userData
    };

    return (
        <div className="create-user-container">
            <h1 className="create-user-title">Tạo Tài Khoản Nhân Viên & Quản Lý</h1>
            <form onSubmit={handleSubmit}>
                <div className="create-user-input-container">
                    <label className="create-user-label">Họ Và Tên</label>
                    <input
                        type="text"
                        name="fullName"
                        value={userData.fullName}
                        onChange={handleChange}
                        className="create-user-input"
                    />
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Giới Tính</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={userData.gender === 'male'}
                        onChange={handleChange}
                        className='create-user-radio-button'
                    />  <span className='create-user-button-title'>
                        Nam
                    </span>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={userData.gender === 'female'}
                        onChange={handleChange}
                        className='create-user-radio-button'
                    /> <span className='create-user-button-title'>
                        Nữ
                    </span>
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Ngày Sinh</label>
                    <input
                        type="date"
                        name="birthDate"
                        value={userData.birthDate}
                        onChange={handleChange}
                        className="create-user-input"
                        required
                    />
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Địa Chỉ</label>
                    <input
                        type="text"
                        name="address"
                        value={userData.address}
                        onChange={handleChange}
                        className="create-user-input"
                    />
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Số Điện Thoại</label>
                    <input
                        type="number"
                        name="phoneNumber"
                        value={userData.phoneNumber}
                        onChange={handleChange}
                        className="create-user-input"
                    />
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Tên Đăng Nhập</label>
                    <input
                        type="text"
                        name="username"
                        value={userData.username}
                        onChange={handleChange}
                        className="create-user-input"
                        required
                    />
                </div>
                <div className="create-user-input-container">
                    <label className="create-user-label">Mật Khẩu</label>
                    <input
                        type="password"
                        name="password"
                        value={userData.password}
                        onChange={handleChange}
                        className="create-user-input"
                    />
                </div>
                
                <button type="submit" className="create-user-button">Tạo Mới</button>
            </form>
        </div>
    );
};

export default CreateUser;
