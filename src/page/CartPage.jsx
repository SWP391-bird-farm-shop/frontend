import React, { useEffect, useState } from "react";
import './CartPage.css';
import QuantityButton from "../components/button/QuantityButton";
import { FaTrashAlt } from "react-icons/fa";
import useAuth from "../hooks/useAuth";
import api from "../components/utils/requestAPI";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
    const { auth } = useAuth();
    const [cartItems, setCartItems] = useState(null);
    const [name, setName] = useState();
    const [address, setAddress] = useState()
    const [phoneNumber, setPhoneNumber] = useState();

    const navigate = useNavigate();

    const fetchData = async () => {
        const url = '/api/Order/get-not-paid';
        const data = {
            userID: auth.user.userId
        };
        try {
            const response = await api.post(url, data);
            setCartItems(response.data);
            console.log(response.data)
            if (response) {
                const paymentUrl = `/api/Payment/get-payment?OrderId=${cartItems[0].orderId}`
                const responsePayment = await api.get(paymentUrl);
                if (responsePayment.data.status) {
                    const finshPaymentUrl = `/api/Order/paid?OrderID=${cartItems[0].orderId}`;
                    const responseFinish = await api.post(finshPaymentUrl);
                    console.log(responseFinish);
                }
            }
        } catch (error) {
            console.error(error);
        }
    }

    // Remove Item
    const removeItem = async (itemId) => {
        let updatedCart;
        cartItems.map(item => {
            item?.orderDetail.map(product => {
                console.log(item.orderDetail)
                if (product.productId === itemId)
                    updatedCart = product
            })
        })
        const url = '/api/OrderDetail/remove-or-temporary';
        const data = {
            orderId: updatedCart.orderId,
            productId: updatedCart.product.productId
        }
        console.log(data);
        try {
            const response = await api.delete(url, {
                headers: {
                    'Content-Type': 'application/json-patch+json'
                },
                data: JSON.stringify(data)
            });
            console.log(response.data);
            if (response) {
                const decreaseTotal = response.data.price;
                const decreaseQuantity = response.data.quantity;
                const total = cartItems[0].total - (decreaseTotal * decreaseQuantity);
                const urlUpdate = '/api/Order/update-order-to-add-product';
                const dataUpdate = {
                    orderId: response.data.orderId,
                    userId: auth.user.userId,
                    note: "string",
                    price: total
                }
                try {
                    const updateResponse = await api.put(urlUpdate, dataUpdate);
                    console.log(updateResponse.data);
                } catch (error) {
                    console.error(error)
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    // Update Quantity
    const updateQuantity = async (itemId, newQuantity) => {
        cartItems.map(item => {
            item?.orderDetail.map(async product => {
                if (product.productId === itemId) {
                    const url = '/api/OrderDetail/update-detail'
                    const data = {
                        orderId: item.orderId,
                        productId: product.productId,
                        quantity: newQuantity,
                        status: false
                    }
                    try {
                        const responseOrderDetail = await api.put(url, data);
                        console.log(responseOrderDetail.data)
                        console.log(item.total)
                        if (responseOrderDetail) {
                            const urlUpdate = '/api/Order/update-order-to-add-product';
                            let total = 0;
                            total += responseOrderDetail.data.price * responseOrderDetail.data.quantity;
                            const data =
                            {
                                orderId: responseOrderDetail.data.orderId,
                                userId: auth.user.userId,
                                note: "string",
                                price: total
                            }
                            try {
                                const responseUpdate = await api.put(urlUpdate, data);
                                console.log(responseUpdate.data);
                            } catch (error) {
                                console.error(error);
                            }
                        }
                    } catch (error) {
                        console.error(error)
                    }
                }
            })
        });
    }

    // Fetch User Cart
    useEffect(() => {
        if (auth.user) {
            fetchData();
            setName(auth.user.fullName);
            setAddress(auth.user.address);
            setPhoneNumber(auth.user.phoneNumber);
        }
        else
            navigate('/log-in')
    }, [auth, updateQuantity, removeItem])

    // Calculate cart total
    const calculateTotal = () => {
        return cartItems?.reduce((total, item) => total + (item.total), 0);
    }

    const paymentSubmit = async () => {
        let method = '';
        const radioButtons = document.querySelectorAll('.payment-section input[type="radio"]');
        radioButtons.forEach(radioButton => {
            if (radioButton.checked) {
                method = radioButton.value;
                console.log(method);
            }
        })
        if (method === null) {
            window.prompt("Please payment options");
        }
        if (method === 'vnpay') {
            const url = `/api/Payment/create-payment?OrderId=${cartItems[0].orderId}`
            try {
                const response = await api.post(url);
                console.log(response.data)
                if (response) {
                    const paymentUrl = `/api/VNPay?PaymentID=${response.data.paymentId}`;
                    try {
                        const response = await api.get(paymentUrl);
                        window.location.href = response.data
                    } catch (error) {
                        console.error(error)
                    }
                }
            } catch (error) {
                console.error(error)
            }
        }
    }


    return (
        <div className="cart-and-payment">
            <div className="cart-container">
                <h2 className="cart-and-payment-heading">Giỏ hàng</h2>
                <div className="cart-items">
                    {cartItems?.map(orderDetail => (
                        orderDetail?.orderDetail?.map(product => (
                            <div key={product.productId} className="cart-item">
                                <button onClick={() => removeItem(product.productId)} className="remove-button"><FaTrashAlt /></button>
                                <div className="cart-item-info">
                                    <div className="cart-item-image">
                                        <img src={product.product.image[0].imageUrl} alt={product.product.productName} />
                                    </div>
                                    <div className="cart-item-details">
                                        <h3 className="cart-item-details-name">{product.product.productName}</h3>
                                        <p>Giá tiền: ${product.price}</p>
                                        <QuantityButton
                                            initialQuantity={product.quantity}
                                            onQuantityChange={(newQuantity) => updateQuantity(product.productId, newQuantity)}
                                        />
                                        <p>Thành tiền: ${(product.price * product.quantity)}</p>
                                    </div>
                                </div>
                            </div>
                        ))
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
                    <p className="order-summary-title">Tổng tiền hàng: <span className="order-summary-price">${calculateTotal()}</span></p>
                    <p className="order-summary-title">Tổng tiền phí vận chuyển: <span className="order-summary-price">$0</span></p>
                    <p className="order-summary-title">Tổng cộng Voucher giảm giá: <span className="order-summary-price">$0</span></p>
                </div>

                <div className="total-section">
                    <h3>Tổng thanh toán</h3>
                    <p>${calculateTotal()}</p>
                </div>

                <div className="confirm-order">
                    <button type="submit" onClick={paymentSubmit} className="confirm-button">Thanh toán</button>
                </div>
            </div>
        </div >
    );
}

export default CartPage;