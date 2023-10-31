import React, { Fragment, useState } from 'react';
import './AddProductPage.css';
import ComboBox from '../../../components/combobox/ComboBox';

const AddProductPage = () => {

    const [avatarUrl, setAvatarUrl] = useState('');

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setAvatarUrl(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };


    return (
        // tạo lồng
        <div className='add-product-page'>
            <div className="add-product-container">
                <h2 className='add-product-container-title'>Thông tin</h2>
                <div className="add-product-section">
                    <div className="add-product-of-img">
                        <h2>Ảnh sản phẩm</h2>
                        <img src={avatarUrl} alt="Product A" className="product-cage-img" />
                        <label htmlFor="imageInput" className="custom-file-upload">Thêm ảnh sản phẩm</label>
                        <input type="file" id="imageInput" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
                    </div>
                    <div className="add-product-of-profile">
                        <h2>Hồ sơ</h2>
                        <form>
                            <div className="add-product-input-container">
                                <label htmlFor="name" className='add-product-input-container-label'>Tên sản phẩm</label>
                                <input type="text" id="name" name="name" className='add-product-input' required />
                            </div>
                            <div className="add-product-check-shape">
                                <label htmlFor="shape" className='add-product-input-container-label'>Hình dáng</label>
                                <input type="radio" name="shape" value="V" className='add-product-check-shape-button' /> <span className='button-title'>Lồng vuông</span>
                                <input type="radio" name="shape" value="NG" className='add-product-check-shape-button' /> <span className='button-title'>Lồng ngũ giác</span>
                            </div>
                            <div className="add-product-combobox">
                                <label htmlFor="size" className='add-product-input-container-label'>Kích thước</label>
                                <ComboBox />
                            </div>
                            <div className="add-product-combobox">
                                <label htmlFor="material" className='add-product-input-container-label'>Chất liệu</label>
                                <ComboBox />
                            </div>
                            <div className="add-product-combobox">
                                <label htmlFor="color" className='add-product-input-container-label'>Màu sắc</label>
                                <ComboBox />
                            </div>
                            <div className="add-product-input-container">
                                <label htmlFor="description" className='add-product-input-container-label'>Mô tả</label>
                                <textarea id="description" name="description" className='add-product-input des-textarea' required />
                            </div>
                            <div className="add-product-input-container">
                                <label htmlFor="price" className='add-product-input-container-label'>Giá tiền (&#8363;)</label>
                                <input type="number" id="price" name="price" className='add-product-input' required />
                            </div>
                            <div className="add-product-input-container">
                                <label htmlFor="inventory" className='add-product-input-container-label'>Số lượng hàng trong kho</label>
                                <input type="number" id="inventory" name="inventory" className='add-product-input' required />
                            </div>
                        </form>
                    </div>
                </div>
                <button type="submit" className='add-product-button'>Lưu sản phẩm</button>
            </div>
        </div>

        //food a&t
        // <div className='add-product-page'>
        //     <div className="add-product-container">
        //         <h2 className='add-product-container-title'>Thông tin</h2>
        //         <div className="add-product-section">
        //             <div className="add-product-food-at-of-img">
        //                 <h2>Ảnh sản phẩm</h2>
        //                 <img src={avatarUrl} alt="Product A" className="product-food-at-img" />
        //                 <label htmlFor="imageInput" className="custom-file-upload">Thêm ảnh sản phẩm</label>
        //                 <input type="file" id="imageInput" accept="image/*" onChange={handleAvatarChange} style={{ display: 'none' }} />
        //             </div>
        //             <div className="add-product-food-at-of-profile">
        //                 <h2>Hồ sơ</h2>
        //                 <form>
        //                     <div className="add-product-input-container">
        //                         <label htmlFor="name" className='add-product-input-container-label'>Tên sản phẩm</label>
        //                         <input type="text" id="name" name="name" className='add-product-input' required />
        //                     </div>
        //                     <div className="add-product-input-container">
        //                         <label htmlFor="description" className='add-product-input-container-label'>Mô tả</label>
        //                         <textarea id="description" name="description" className='add-product-input des-textarea' required />
        //                     </div>
        //                     <div className="add-product-input-container">
        //                         <label htmlFor="price" className='add-product-input-container-label'>Giá tiền (&#8363;)</label>
        //                         <input type="number" id="price" name="price" className='add-product-input' required />
        //                     </div>
        //                     <div className="add-product-input-container">
        //                         <label htmlFor="inventory" className='add-product-input-container-label'>Số lượng hàng trong kho</label>
        //                         <input type="number" id="inventory" name="inventory" className='add-product-input' required />
        //                     </div>
        //                 </form>
        //             </div>
        //         </div>
        //         <button type="submit" className='add-product-button'>Lưu sản phẩm</button>
        //     </div>
        // </div>
    );
}

export default AddProductPage;
