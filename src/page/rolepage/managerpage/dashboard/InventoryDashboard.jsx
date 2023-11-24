import { useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';

function InventoryDashboard() {
    const data = [
        {
            y: '1000',
            x: '1',
            cage: 100,
            food: 200,
            toy: 200,
        },
        {
            y: '1000',
            x: '2',
            cage: 500,
            food: 138,
            toy: 200,
        },
        {
            y: '1000',
            x: '3',
            cage: 100,
            food: 180,
            toy: 200,
        },
        {
            y: '1000',
            x: '4',
            cage: 100,
            food: 398,
            toy: 200,
        },
        {
            y: '1000',
            x: '5',
            cage: 100,
            food: 480,
            toy: 200,
        },
        {
            y: '1000',
            x: '6',
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            y: '1000',
            x: '7',
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            y: '1000',
            x: '8',
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            y: '1000',
            x: '9',
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            y: '1000',
            x: '10',
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            y: '1000',
            x: '11',
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            y: '1000',
            x: '12',
            cage: 100,
            food: 300,
            toy: 200,
        }
    ];



    // function formatCash(currency) {
    //     return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // }

    const getTotalQuantity = () => {
        const data = [
            {
                x: '1',
                cage: 100,
                food: 200,
                toy: 200,
            },
            {
                x: '2',
                cage: 500,
                food: 138,
                toy: 382,
            },
            {
                x: '3',
                cage: 100,
                food: 180,
                toy: 200,
            },

        ];
        const totalQuantity = data.reduce((acc, entry) => acc + entry.cage + entry.food + entry.toy, 0);
        return totalQuantity;
    };

    const getTotalQuantitySold = () => {
        // Assuming you have a separate data array for sold quantities, modify accordingly if needed
        const soldData = [
            // ... (data for sold quantities)
            {
                x: '1',
                cage: 100,
                food: 300,
                toy: 200,
            }
        ];

        const totalQuantitySold = soldData.reduce((acc, entry) => acc + entry.cage + entry.food + entry.toy, 0);
        return totalQuantitySold;
    };

    // sản phẩm bán chạy nhất
    const getBestSellingProduct = () => {
        const products = data.map(entry => ({
            name: 'lồng',
            quantity: entry.cage,
        }, {
            name: 'thức ăn',
            quantity: entry.food,
        }, {
            name: 'phụ kiện - đồ chơi',
            quantity: entry.toy,
        }));

        const totalQuantities = {};

        products.forEach(product => {
            const { name, quantity } = product;
            totalQuantities[name] = (totalQuantities[name] || 0) + quantity;
        });

        const bestSellingProduct = Object.keys(totalQuantities).reduce((a, b) =>
            totalQuantities[a] > totalQuantities[b] ? a : b
        );

        return bestSellingProduct;
    };



    return (
        <div className='dashboard'>
            <main className='main-container'>
                <h3 className='main-title'>BẢNG THỐNG KÊ HÀNG HÓA</h3>
                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG SỐ LƯỢNG</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1>{getTotalQuantity()}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG SỐ LƯỢNG ĐÃ BÁN</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1>{getTotalQuantitySold()}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>SẢN PHẨM BÁN CHẠY NHẤT</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1 className='card-text'>{getBestSellingProduct()}</h1>
                    </div>
                </div>

                <div className='charts'>
                    <div className="chart">
                        <h3 className="chart-title">TỔNG SỐ LƯỢNG</h3>

                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="x" />
                                <YAxis dataKey="y" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="cage" stroke="#8884d8" name='lồng' activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="food" stroke="#82ca9d" name='thức ăn' activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="toy" stroke="#82ca9d" name='phụ kiện - đồ chơi' activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart">
                        <h3 className="chart-title">TỔNG SỐ LƯỢNG ĐÃ BÁN</h3>

                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={500}
                                height={300}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="x" />
                                <YAxis dataKey="y" />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="cage" stroke="#8884d8" name='lồng' activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="food" stroke="#82ca9d" name='thức ăn' activeDot={{ r: 6 }} />
                                <Line type="monotone" dataKey="toy" stroke="#82ca9d" name='phụ kiện - đồ chơi' activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default InventoryDashboard