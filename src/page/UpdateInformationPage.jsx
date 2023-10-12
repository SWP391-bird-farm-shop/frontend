import React, {useState} from 'react';
import './UpdateInformationPage.css';

const UpdateInformationPage = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

  const handleInputChange = (event) => {
    const input = event.target.value.replace(/\D/g, ''); // Remove non-digit characters
    setPhoneNumber(input.slice(0, 10)); 
  };
    return (
        <div className='update-info-section'>
            <a href='/home' className='homepage-link'> Về trang chủ</a>
            <div className="update-info-container">
                <h2>Điền thông tin</h2>
                <form>
                    <div className="update-info-input-container">
                        <label htmlFor="name">Họ và Tên</label>
                        <input type="text" id="name" name="name" className='update-info-input' required/>
                    </div>
                    <div className="update-info-input-container">
                        <label htmlFor="address">Địa chỉ</label>
                        <input type="text" id="address" name="address" className='update-info-input' required/>
                    </div>
                    <div className="update-info-input-container">
                        <label htmlFor="phone-number">Số điện thoại</label>
                        <input type="text" id="phone-number" name="phone-number" value={phoneNumber} onClick={handleInputChange} className='update-info-input' required/>
                    </div>
                    <button type="submit" className='update-info-button'>Xác nhận</button>
                </form>
            </div>
        </div>
    );
}

export default UpdateInformationPage;
