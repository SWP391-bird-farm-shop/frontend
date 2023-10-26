import React, { useState } from "react";
import './CartPage.css';
import QuantityButton from "../components/button/QuantityButton";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Product 1",
            price: 10.00,
            quantity: 3,
            image: "cu.jpg"
        },
        {
            id: 2,
            name: "Product 2",
            price: 15.00,
            quantity: 2,
            image: "chaomao.png"
        },
        {
            id: 3,
            name: "Product 3",
            price: 15.00,
            quantity: 2,
            image: "hoami.png"
        },
        {
            id: 4,
            name: "Product 4",
            price: 20.00,
            quantity: 2,
            image: "hoami.png"
        },
        {
            id: 5,
            name: "Product 5",
            price: 5.00,
            quantity: 1,
            image: "hoami.png"
        },
    ]);

    const [phoneNumber, setPhoneNumber] = useState('(555) 123-4567');
    const [address, setAddress] = useState('123 Main St');
    const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
    const [isEditingAddress, setIsEditingAddress] = useState(false);

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneNumberEdit = () => {
        setIsEditingPhoneNumber(true);
    };

    const handleAddressEdit = () => {
        setIsEditingAddress(true);
    };

    const handlePhoneNumberSave = () => {
        setIsEditingPhoneNumber(false);
    };

    const handleAddressSave = () => {
        setIsEditingAddress(false);
    };

    const removeItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
    }

    const updateQuantity = (itemId, newQuantity) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: newQuantity };
            }
            return item;
        });
        setCartItems(updatedCart);
    }

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    return (
        <div className="cart-and-payment">
            <div className="cart-container">
                <h2 className="cart-and-payment-heading">Giỏ hàng</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <button onClick={() => removeItem(item.id)} className="remove-button"><FaTrashAlt /></button>
                            <div className="cart-item-info">
                                <div className="cart-item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="cart-item-details">
                                    <h3 className="cart-item-details-name">{item.name}</h3>
                                    <p>Giá tiền: ${item.price.toFixed(2)}</p>
                                    <QuantityButton
                                        initialQuantity={item.quantity}
                                        onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                                    />
                                    <p>Thành tiền: ${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="payment-container">
                <h2 className="cart-and-payment-heading">Hóa đơn</h2>
                <div className="customer-info-section">
                    <p>Tên khách hàng: John Doe</p>
                    {isEditingPhoneNumber ? (
                        <div className="flex">
                            <p>
                            Số điện thoại:
                            <input
                                type="number"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                className="customer-info-section-input" minLength={10} maxLength={11}
                            />
                            </p>
                            <button onClick={handlePhoneNumberSave} className="customer-info-section-button">Lưu</button>
                        </div>
                    ) : (
                        <p className="flex">
                            Số điện thoại: {phoneNumber}{' '}
                            <span className="change-info" onClick={handlePhoneNumberEdit}>
                                Thay đổi
                            </span>
                        </p>
                    )}
                    {isEditingAddress ? (
                        <div className="flex">
                            <p>
                            Địa chỉ:
                            <input
                                type="text"
                                value={address}
                                onChange={handleAddressChange}
                                className="customer-info-section-input"
                            />
                            </p>
                            <button onClick={handleAddressSave} className="customer-info-section-button">Lưu</button>
                        </div>
                    ) : (
                        <p className="flex">
                            Địa chỉ: {address}{' '}
                            <span className="change-info" onClick={handleAddressEdit}>
                                Thay đổi
                            </span>
                        </p>
                    )}
                </div>

                <div className="voucher-section">
                    <div className="voucher-section-combobox">
                        <select name="voucher" id="voucher" className="voucher-combobox">
                            <option value="voucher1">Voucher 1</option>
                            <option value="voucher2">Voucher 2</option>
                            <option value="voucher3">Voucher 3</option>
                            <option value="voucher4">Voucher 4</option>
                        </select>
                    </div>
                    <div className="voucher-info">
                        <h3 className="voucher-info-title">Voucher 1</h3>
                        <p className="voucher-info-description">Giảm 10% tổng giá sản phẩm</p>
                    </div>
                </div>

                <div className="payment-section">
                    <div className="payment-method">
                        <input type="radio" name="payment" value="vnpay" id="vnpay-button" className="payment-section-button" />
                        <img src="bocau.jpg" alt="vnpay" className="payment-logo" />
                        <p>VnPay</p>
                    </div>
                    <div className="payment-method">
                        <input type="radio" name="payment" value="cash" id="cash-button" className="payment-section-button" />
                        <img src="tienmat.jpg" alt="cash" className="payment-logo" />
                        <p>Tiền Mặt</p>
                    </div>
                </div>

                <div className="order-summary-section">
                    <p className="order-summary-title">Tổng tiền hàng: <span className="order-summary-price">${calculateTotal().toFixed(2)}</span></p>
                    <p className="order-summary-title">Tổng tiền phí vận chuyển: <span className="order-summary-price">$0</span></p>
                    <p className="order-summary-title">Tổng cộng Voucher giảm giá: <span className="order-summary-price">$0</span></p>
                </div>

                <div className="total-section">
                    <h3>Tổng thanh toán</h3>
                    <p>${calculateTotal().toFixed(2)}</p>
                </div>

                <div className="confirm-order">
                    <button type="submit" className="confirm-button">Thanh toán</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;