import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import './QuantityButton.css'

const QuantityButton = ({ initialQuantity, onQuantityChange }) => {
    const [quantity, setQuantity] = useState(initialQuantity);

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
            onQuantityChange(quantity - 1);
        }
    };

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
        onQuantityChange(quantity + 1);
    };

    return (
        <div className="quantity">
            <button className="quantity-button left" onClick={decrementQuantity}><FaMinus className="quantity-icon" /></button>
            <input className="quantity-number" type="number" value={quantity} readOnly />
            <button className="quantity-button right" onClick={incrementQuantity}><FaPlus className="quantity-icon" /></button>
        </div>
    );
}

export default QuantityButton;