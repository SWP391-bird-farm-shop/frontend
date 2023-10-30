import React, { useState } from "react";
import "./ComboBox.css"

const ComboBox = () => {
    const [selected, setSelected] = useState('');

    const priceOptions = [
        'Tăng dần',
        'Giảm dần',
    ];

    const sizeOptions = [
        '24"',
        '30"',
        '36"',
        '42"',
        '48"',
        '60"'
    ]
    return (
        //product
        // <div className="combo-box-price">
        //     <select value={selected} onChange={e => setSelected(e.target.value)}>
        //         <option value="" disabled hidden selected>Sắp xếp theo giá</option>
        //         {priceOptions.map(priceOption => (
        //             <option key={priceOption} value={priceOption}>
        //                 {priceOption}
        //             </option>
        //         ))}
        //     </select>
        // </div>

        //custom
        <div className="combo-box-size">
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="" disabled hidden selected>Chọn kích thước lồng</option>
                {sizeOptions.map(sizeOption => (
                    <option key={sizeOption} value={sizeOption}>
                        {sizeOption}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default ComboBox;