import React, { useState } from "react";
import './CartPage.css';
import QuantityButton from "../components/button/QuantityButton";

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
    ]);

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
        <div className="Order">
            <div className="Order-Total">
                <div id="cart">
                    <h1>Giỏ Hàng Của Bạn</h1>
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <div className="item-image">
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>Price: ${item.price.toFixed(2)}</p>
                                    <div className="button-container">
                <QuantityButton
                    initialQuantity={item.quantity}
                    onQuantityChange={(newQuantity) => updateQuantity(item.id, newQuantity)}
                />
                <button onClick={() => removeItem(item.id)} className="remove-button">Remove</button>
            </div>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
    </div>
                        ))}
                    </div>
                </div>
            </div>
{/* co này c Đứcới Huy l n */}
            <div className="Order-Payment">
                <div className="Order-Info">
                    <h1>Hóa Đơn</h1>
                    <div className="customer-info">
                        <p>Name Customer: John Doe</p>
                        <p>Phone Customer: (555) 123-4567</p>
                        <p>Address Customer: 123 Main St</p>
                    </div>
                </div>

                <div className="Voucher-Info">
                    <div className="voucher-test">
                        <label for="voucher">Choose a voucher:</label>
                    </div>
                    <div>
                        <select name="voucher" id="voucher" className="voucher-combobox">
                            <option value="voucher1">Voucher 1</option>
                            <option value="voucher2">Voucher 2</option>
                            <option value="voucher3">Voucher 3</option>
                            <option value="voucher4">Voucher 4</option>
                        </select>
                    </div>
                    <div className="voucher-box">
                        <div className="voucher-box-test">
                            Khong Co Voucher
                        </div>
                    </div>
                </div>

                <div className="Payment-Method">
                    <label>
                        <input type="radio" name="payment" value="vnpay" id="vnpay-button" />
                        <img src="vnpay.jpg" alt="VNPAY" className="payment-logo" />
                        VNPAY
                    </label>
                    <label>
                        <input type="radio" name="payment" value="tienmat" id="tienmat-button" />
                        <img src="tienmat.jpg" alt="Tienmat" className="payment-logo" />
                        Tien Mat
                    </label>
                </div>

                <div className="Total-Info">
                    <p>Total: $<span>{calculateTotal().toFixed(2)}</span></p>
                </div>

                <div className="Confirm-Order">
                    <button type="submit" id="confirm-button">Confirm Order</button>
                </div>
            </div>
        </div>
    );
}

export default CartPage;