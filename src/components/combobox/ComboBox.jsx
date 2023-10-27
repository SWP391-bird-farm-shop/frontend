import React, { useState } from "react";
import "./ComboBox.css"

const ComboBox = () => {
    const [selected, setSelected] = useState('');

    const options = [
        'Tăng dần',
        'Giảm dần',
    ];
    return (
        <div className="combo-box">
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="" disabled hidden selected>Sắp xếp theo giá</option>
                {options.map(option => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ComboBox;