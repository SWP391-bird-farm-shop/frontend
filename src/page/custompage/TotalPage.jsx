import React, { useState } from "react";
import './CustomPage.css';
import { Link, useNavigate } from "react-router-dom";


const TotalPage = () => {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [editName, setEditName] = useState("");
  const [editPhonenumber, setEditPhonenumber] = useState("");
  const [editAddress, setEditAddress] = useState("");

  const [isEditing, setEditing] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);

  const [isNameChange, setIsNameChange] = useState(false);
  const [isPhoneNumChange, setIsPhoneNumChange] = useState(false);
  const [isAddressChange, setIsAddressChange] = useState(false);
  const [voucherList, setVoucherList] = useState(null);

  const [selectVoucher, setSelectVoucher] = useState("");


  const handleCustomerEdit = () => {
    setEditing(true);
    setIsEditingName(true);
    setIsEditingAddress(true);
    setIsEditingPhoneNumber(true);
  };

  const handleCustomerCancel = () => {
    setEditing(false);
    setIsEditingName(false);
    setIsEditingAddress(false);
    setIsEditingPhoneNumber(false);
  };

  const handleSave = async () => {
    setEditing(false);
    setIsEditingName(false);
    setIsEditingAddress(false);
    setIsEditingPhoneNumber(false);

    if (editName && editName !== name) {
      setIsNameChange(true);
    }
    if (editPhonenumber && editPhonenumber !== phoneNumber) {
      setIsPhoneNumChange(true);
    }
    if (editAddress && editAddress !== address) {
      setIsAddressChange(true);
    }
    if (isNameChange && isPhoneNumChange && isAddressChange) {
      setName(editName);
      setPhoneNumber(editPhonenumber);
      setAddress(editAddress);

      const url = "/api/Order/update-order-to-add-product";
      const total = cartItems[0]?.total;
      let note = editName + " " + editPhonenumber + " " + editAddress;
      note.toString();
      console.log(note);
      const data = {
        orderId: cartItems[0]?.orderId,
        userId: auth.user.userId,
        note: note,
        price: total,
      };
      console.log("y");
      try {
        const response = await api.put(url, data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  }

  const fetchDataVoucherList = async () => {
    const url = "/api/Voucher/get-for-user";
    try {
      const response = await api.get(url);
      console.log(response.data);
      setVoucherList(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  let fetch = null;
  //handle select voucher and decrese total payment
  const fetchVoucherData = async (id) => {
    const url = `/api/Voucher/get-by-id?voucherId=${id}`;
    try {
      const response = await api.get(url);
      if (response) {
        console.log(response.data);
        fetch = response.data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  //handle voucher
  const handleSelectVoucher = async (e) => {
    e.preventDefault();
    await fetchVoucherData(e.target.value);
    console.log(fetch);
    const selectedVoucher = fetch.discount;
    const total =
      cartItems[0]?.total -
      (parseFloat(selectedVoucher) / 100) * cartItems[0]?.total;
    console.log(total);
    setSelectVoucher(selectedVoucher);
    setTotalPrice(total);
  };

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const handleResetButtonClick = () => {
    navigate("/custom-page")
  }

  const handleConfirmButtonClick = async (event) => {
    event.preventDefault();
    const url = '';
    const data = {
      userId: auth?.user?.userId,
      styleName: name,
    };

    setIsLoading(true);

    try {
      const response = await api.post(url, data);

      if (response) {
        setSelectedStyle(styleName);
        navigate("/cart");
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }

    if (isLoading) {
      return;
    }
  };

  function formatCash(currency) {
    return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <div className="custom-page">
      <div>
        <h1 className="custom-title border-bottom">Thiết Kế Lồng</h1>
      </div>

      <div className="custom-summary-total">
        <h2 className="cart-and-payment-heading">Hóa đơn</h2>
        <div className="flex-center">
          <div className="custom-summary-total-section">
            <div className="customer-info-section">
              {isEditingName ? (
                <div className="flex">
                  <p>
                    Tên khách hàng:
                    <input
                      type="text"
                      onChange={(event) => setEditName(event.target.value)}
                      className="customer-info-section-input"
                      placeholder={name}
                      required
                    />
                  </p>
                </div>
              ) : (
                <p>Tên khách hàng: {editName}</p>
              )}

              {isEditingPhoneNumber ? (
                <div className="flex">
                  <p>
                    Số điện thoại:
                    <input
                      type="number"
                      onChange={(event) => setEditPhonenumber(event.target.value)}
                      className="customer-info-section-input"
                      minLength={10}
                      maxLength={11}
                      placeholder={phoneNumber}
                      required
                    />
                  </p>
                </div>
              ) : (
                <p className="flex">Số điện thoại: {editPhonenumber} </p>
              )}

              {isEditingAddress ? (
                <div className="flex">
                  <p>
                    Địa chỉ:
                    <input
                      type="text"
                      onChange={(event) => setEditAddress(event.target.value)}
                      className="customer-info-section-input"
                      placeholder={address}
                      required
                    />
                  </p>
                </div>
              ) : (
                <p className="flex">Địa chỉ: {editAddress} </p>
              )}

              <div className="editting-information">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="customer-info-section-button"
                    >
                      Lưu
                    </button>
                    <button
                      className="customer-info-section-button red"
                      onClick={handleCustomerCancel}
                    >
                      Hủy
                    </button>
                  </>
                ) : (
                  <p>
                    <span
                      className="change-info change-customer-info"
                      onClick={handleCustomerEdit}
                    >
                      Thay đổi
                    </span>
                  </p>
                )}
              </div>
            </div>
            <div className="custom-summary-total-detail">
              <h2>Thông tin lồng</h2>
              <p>Tên lồng: <span className="custom-summary-total-detail-info">Tên</span></p>
              <p>Hình dáng: <span className="custom-summary-total-detail-info">Hình vuông</span></p>
              <p>Kích thước: <span className="custom-summary-total-detail-info">100x50"</span></p>
              <p>Vật liệu: <span className="custom-summary-total-detail-info">Vàng</span></p>
              <p>Màu sắc: <span className="custom-summary-total-detail-info">Đỏ</span></p>
            </div>
            <div className="voucher-section">
              <div className="voucher-section-combobox">
                <select
                  name="voucher"
                  id="voucher"
                  className="voucher-combobox"
                  onChange={handleSelectVoucher}
                >
                  <option value="" disabled hidden selected>
                    Chọn Voucher
                  </option>
                  {voucherList?.map((voucher) => (
                    <option key={voucher.voucherId} value={voucher.voucherId}>
                      {voucher.voucherName}
                    </option>
                  ))}
                </select>
              </div>
              <div className="voucher-info">
                <h3 className="voucher-info-title">
                  {selectVoucher?.voucherName}
                </h3>
                <p className="voucher-info-description">
                  {selectVoucher?.description}
                </p>
              </div>
            </div>

            <div className="payment-section">
              <div className="payment-method">
                <input
                  type="radio"
                  name="payment"
                  value="vnpay"
                  id="vnpay-button"
                  className="payment-section-button"
                />
                <img src="vnpay.png" alt="vnpay" className="payment-logo" />
                <p>VnPay</p>
              </div>

              <div className="payment-method">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  id="cash-button"
                  className="payment-section-button"
                />
                <img src="cash.png" alt="cash" className="payment-logo" />
                <p>Tiền Mặt</p>
              </div>
            </div>

            <div className="order-summary-section">
              <p className="order-summary-title">
                Tổng tiền hàng:{" "}
                <span className="order-summary-price">
                  ₫{formatCash(0)}
                </span>
              </p>
              <p className="order-summary-title">
                Tổng tiền phí vận chuyển:{" "}
                <span className="order-summary-price">₫0</span>
              </p>
              {selectVoucher ? (
                <p className="order-summary-title">
                  Tổng cộng Voucher giảm giá:{" "}
                  <span className="order-summary-price">
                    ₫{formatCash(
                      // (parseFloat(selectVoucher) / 100) * cartItems[0]?.total
                    )}{" "}
                  </span>
                </p>
              ) : (
                <p className="order-summary-title">
                  Tổng cộng Voucher giảm giá:{" "}
                  <span className="order-summary-price">₫0</span>
                </p>
              )}
            </div>

            <div className="total-section">
              <h3>Tổng thanh toán</h3>
              {selectVoucher === "" ? (
                <p>₫{formatCash(0)}</p>
              ) : (
                <p>₫{formatCash(totalPrice)}</p>
              )}
            </div>
            <div className="custom-summary-total-detail-button">
              <button type="submit" className="custom-summary-total-reset" onClick={handleResetButtonClick}>Thiết Lập Lại Đơn Hàng</button>
              <button type="submit" onClick={handleConfirmButtonClick} className="custom-summary-total-confirm">Thanh toán</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TotalPage;