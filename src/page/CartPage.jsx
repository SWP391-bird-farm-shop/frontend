import React, { useState } from "react";
import './CartPage.css';

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

    // const updateQuantity = (itemId, newQuantity) => {
    //     const updatedCart = cartItems.map(item => {
    //         if (item.id === itemId) {
    //             return { ...item, quantity: newQuantity };
    //         }
    //         return item;
    //     });
    //     setCartItems(updatedCart);
    // }

    const incrementQuantity = (itemId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    }

    const decrementQuantity = (itemId) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === itemId && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
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
            <h1>Hello CartPage</h1>
            <div id="cart">
                <h2>Your Shopping Cart</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p>Price: ${item.price.toFixed(2)}</p>
                                <div className="quantity-controls">
                                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                                </div>
                                <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div id="total-box">
    <p>Total</p>
    <p id="cart-total">${calculateTotal().toFixed(2)}</p>
</div>
            </div>
        </div>
        <div className="Order-Payment">
            <h1>Payment</h1>
            <h2>Your Info Cart</h2>
            <div className="Customer-Info">
                <p>Name Customer: John Doe</p>
                <p>Address Customer: 123 Main St</p>
                <p>Phone Customer: (555) 123-4567</p>
                <p>Voucher: ABC123</p>
                <p>Total: $<span>{calculateTotal().toFixed(2)}</span></p>
            </div>
                <div className="Payment-Option">
                    <div class="button-container">   
                    
                    <button id="momo-button">
    <img src="momo.jpg" alt="Momo" className="payment-logo" />
    Momo
</button>
<button id="vnpay-button">
    <img src="vnpay.jpg" alt="VNPAY" className="payment-logo" />
    VNPAY
</button>
<button id="tienmat-button"><img src="tienmat.jpg" alt="Tienmat" className="payment-logo" />Tien Mat</button> 
                    
                    
                    </div>
             
                </div>
            </div>
        </div>
    )
}

export default CartPage;