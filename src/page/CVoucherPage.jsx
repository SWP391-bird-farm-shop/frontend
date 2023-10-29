import React, { useState } from 'react';
import './CVoucherPage.css';

function CVoucherPage() {
  const [voucher, setVoucher] = useState({
    name: '',
    description: '',
    value: '',
    expiry: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVoucher({ ...voucher, [name]: value });
  };

  const handleAddVoucher = () => {
    if (voucher.name && voucher.value && voucher.expiry) {
      console.log('Voucher added:', voucher);
      setVoucher({
        name: '',
        description: '',
        value: '',
        expiry: '',
      });
    } else {
      alert('Vui lòng điền đầy đủ thông tin tên, giá trị và ngày hết hạn.');
    }
  };

  return (
    <div className="voucher-page">
      <h1 className="page-title">Tạo Voucher</h1>
      <form>
        <label className="input-label" htmlFor="name">Tên Voucher:</label>
        <input className="input-field" type="text" id="name" name="name" value={voucher.name} onChange={handleInputChange} required />
        <br />
        <label className="input-label" htmlFor="description">Mô tả Voucher:</label>
        <input className="input-field" type="text" id="description" name="description" value={voucher.description} onChange={handleInputChange} />
        <br />
        <label className="input-label" htmlFor="discount">Giá Trị Giảm (%):</label>
        <input className="input-field" type="number" id="discount" name="discount" value={voucher.discount} onChange={handleInputChange} required />
        <br />
        <label className="input-label" htmlFor="expiry">Ngày hết hạn:</label>
        <input className="input-field" type="date" id="expiry" name="expiry" value={voucher.expiry} onChange={handleInputChange} required />
        <br />
        <button className="add-button" type="button" onClick={handleAddVoucher}>Add</button>
      </form>
    </div>
  );
}

export default CVoucherPage;
