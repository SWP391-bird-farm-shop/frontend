import React, { useState } from 'react';
import './SettingInformationPage.css';

const SettingInformationPage = () => {
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const validateDateOfBirth = (event) => {
        const selectedDate = new Date(event.target.value);
        const today = new Date();

        if (selectedDate >= today) {
            alert("Please select a valid date of birth.");
            event.target.value = ""; // Clear the input field
        }
    }

    return (
        <div className='update-info-section'>
            <a href='/home' className='homepage-link'> Về trang chủ</a>
            <div className="update-info-container">
                <h2>Cập nhật thông tin</h2>
                <div className="update-info-of-img">

                </div>
                <div className="update-info-of-profile">
                    <form>
                        <div className="update-info-input-container">
                            <label htmlFor="name" className='update-info-input-container-label'>Họ và Tên</label>
                            <input type="text" id="name" name="name" className='update-info-input' required />
                        </div>
                        <div className="update-info-check-container">
                            <div className="update-info-check-sex">
                                <label htmlFor="sex" className='update-info-input-container-label'>Giới tính</label>
                                <input type="radio" name="sex" value="M" className='update-info-check-sex-button' /> <span className='button-title'>Nam</span>
                                <input type="radio" name="sex" value="F" className='update-info-check-sex-button' /> <span className='button-title'>Nữ</span>
                            </div>
                            <div className="update-info-check-dob">
                                <label htmlFor="dob" className='update-info-input-container-label'>Ngày sinh</label>
                                <input type="date" name="dob" className='update-info-date' value={selectedDate} onChange={handleDateChange} onBlur={validateDateOfBirth} required />
                            </div>
                        </div>
                        <div className="update-info-input-container">
                            <label htmlFor="address" className='update-info-input-container-label'>Địa chỉ</label>
                            <input type="text" id="address" name="address" className='update-info-input' required />
                        </div>
                        <div className="update-info-input-container">
                            <label htmlFor="phone-number" className='update-info-input-container-label'>Số điện thoại</label>
                            <input type="number" id="phone-number" name="phone-number" className='update-info-input' required />
                        </div>
                        <button type="submit" className='update-info-button'>Xác nhận</button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default SettingInformationPage;
