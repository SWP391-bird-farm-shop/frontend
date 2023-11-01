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

    const materialOptions = [
        'Gỗ',
        'Sắt',
        'Bạc',
        'Đồng',
        'Nhôm',
    ]

    const colorOptions = [
        'Màu đen',
        'Màu gỗ',
        'Màu trắng',
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

        // size
        // <div className="combo-box-product">
        //     <select value={selected} onChange={e => setSelected(e.target.value)}>
        //         <option value="" disabled hidden selected>Chọn kích thước lồng</option>
        //         {sizeOptions.map(sizeOption => (
        //             <option key={sizeOption} value={sizeOption}>
        //                 {sizeOption}
        //             </option>
        //         ))}
        //     </select>
        // </div>

        // material
        // <div className="combo-box-product">
        //     <select value={selected} onChange={e => setSelected(e.target.value)}>
        //         <option value="" disabled hidden selected>Chọn chất liệu lồng</option>
        //         {materialOptions.map(materialOption => (
        //             <option key={materialOption} value={materialOption}>
        //                 {materialOption}
        //             </option>
        //         ))}
        //     </select>
        // </div>

        //color
        <div className="combo-box-product">
            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value="" disabled hidden selected>Chọn màu lồng</option>
                {colorOptions.map(colorOption => (
                    <option key={colorOption} value={colorOption}>
                        {colorOption}
                    </option>
                ))}
            </select>
        </div>


    )
}

export default ComboBox;