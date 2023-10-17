import React, {useState} from 'react';
import './AuthenticationPage.css';

const UpdateInformationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.value.replace(/\D/g, '');
    setPhoneNumber(input.slice(0, 10)); 
  };
    return (
        <div className='authentication-section'>
            <a href='/sign-up' className='homepage-link'> Về trang đăng kí</a>
            <div className="authentication-container">
                <h2>Điền thông tin</h2>
                <form>
                    <div className="authentication-input-container">
                        <label htmlFor="name" className='authentication-input-container-label'>Họ và Tên</label>
                        <input type="text" id="name" name="name" className='authentication-input' required/>
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="address" className='authentication-input-container-label'>Địa chỉ</label>
                        <input type="text" id="address" name="address" className='authentication-input' required/>
                    </div>
                    <div className="authentication-input-container">
                        <label htmlFor="phone-number" className='authentication-input-container-label'>Số điện thoại</label>
                        <input type="text" id="phone-number" name="phone-number" value={phoneNumber} onClick={handleInputChange} className='authentication-input' required/>
                    </div>
                    <button type="submit" className='authentication-button'>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateInformationPage;
