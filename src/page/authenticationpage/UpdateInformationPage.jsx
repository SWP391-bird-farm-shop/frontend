import React, { useState } from 'react';
import './AuthenticationPage.css';
import './SignUpPage.css'

const UpdateInformationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState();

    return (
        <div className='authentication-section'>
            <div className="authentication-container">
                <h2>Điền thông tin</h2>
                <form>
                    <div className="authentication-input-container">
                        <label htmlFor="name" className='authentication-input-container-label'>Họ và Tên</label>
                        <input type="text" id="name" name="name" className='authentication-input' required />
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="address" className='authentication-input-container-label'>Địa chỉ</label>
                        <input type="text" id="address" name="address" className='authentication-input' required />
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="gender" className='authentication-input-container-label'>Giới tính</label>
                        <div className="gender-container">
                            <input type="radio" id="male gender" name="gender-value" value='Nam' className='gender-value-input' required />
                            <label htmlFor="male">Nam</label>
                            <input type="radio" id="female gender" name="gender-value" value='Nữ' className='gender-value-input' required />
                            <label htmlFor="female">Nữ</label>
                        </div>
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="birthday" className='authentication-input-container-label'>Năm sinh</label>
                        <input type="date" id="birthday" name="birthday" className='authentication-input' required />
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="phone-number" className='authentication-input-container-label'>Số điện thoại</label>
                        <input type="text" id="phone-number" name="phone-number" className='authentication-input' required />
                    </div>
                    <button type="submit" className='authentication-button'>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateInformationPage;
