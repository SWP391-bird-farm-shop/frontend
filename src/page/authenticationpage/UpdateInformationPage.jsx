import React, { useState } from 'react';
import './AuthenticationPage.css';

const UpdateInformationPage = () => {
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
        <div className='authentication-section'>
            <a href='/sign-up' className='homepage-link'> Về trang đăng kí</a>
            <div className="authentication-container">
                <h2>Điền thông tin</h2>
                <form>
                    <div className="authentication-input-container">
                        <label htmlFor="name" className='authentication-input-container-label'>Họ và Tên</label>
                        <input type="text" id="name" name="name" className='authentication-input' required />
                    </div>
                    <div className="authentication-check-container">
                        <div className="authentication-check-sex">
                            <label htmlFor="sex" className='authentication-input-container-label'>Giới tính</label>
                            <input type="radio" name="sex" value="M" className='authentication-check-sex-button' /> <span className='button-title'>Nam</span>
                            <input type="radio" name="sex" value="F" className='authentication-check-sex-button' /> <span className='button-title'>Nữ</span>
                        </div>
                        <div className="authentication-check-dob">
                            <label htmlFor="dob" className='authentication-input-container-label'>Ngày sinh</label>
                            <input type="date" name="dob" className='authentication-date' value={selectedDate} onChange={handleDateChange} onBlur={validateDateOfBirth} required />
                        </div>
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="address" className='authentication-input-container-label'>Địa chỉ</label>
                        <input type="text" id="address" name="address" className='authentication-input' required />
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="phone-number" className='authentication-input-container-label'>Số điện thoại</label>
                        <input type="number" id="phone-number" name="phone-number" className='authentication-input' required />
                    </div>
                    <button type="submit" className='authentication-button'>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateInformationPage;
