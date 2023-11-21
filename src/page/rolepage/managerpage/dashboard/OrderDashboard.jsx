import { useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';

function OrderDashboard() {
    const data = [
        {
            month: '1',
            order: 100,
            custom: 200,

        },
        {
            month: '2',
            order: 500,
            custom: 138,

        },
        {
            month: '3',
            order: 100,
            custom: 180,

        },
        {
            month: '4',
            order: 100,
            custom: 398,

        },
        {
            month: '5',
            order: 100,
            custom: 480,

        },
        {
            month: '6',
            order: 100,
            custom: 300,

        },
        {
            month: '7',
            order: 100,
            custom: 430,

        },
        {
            month: '8',
            order: 100,
            custom: 400,

        },
        {
            month: '9',
            order: 100,
            custom: 430,

        },
        {
            month: '10',
            order: 100,
            custom: 300,

        },
        {
            month: '11',
            order: 100,
            custom: 10,

        },
        {
            month: '12',
            order: 100,
            custom: 100,

        }
    ];

    // function formatCash(currency) {
    //     return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // }

    const getTotalOrderQuantity = () => {
        const totalOrderQuantity = data.reduce((acc, entry) => acc + entry.order, 0);
        return totalOrderQuantity;
    };

    const getTotalDesignOrderQuantity = () => {
        const totalDesignOrderQuantity = data.reduce((acc, entry) => acc + entry.custom, 0);
        return totalDesignOrderQuantity;
    };

    const getMonthWithMostOrders = () => {
        const monthCounts = {};

        data.forEach((entry) => {
            const month = entry.month;
            monthCounts[month] = (monthCounts[month] || 0) + 1;
        });

        const mostOrdersMonth = Object.keys(monthCounts).reduce((a, b) =>
            monthCounts[a] > monthCounts[b] ? a : b
        );

        return mostOrdersMonth;
    };

    return (
        <div className='dashboard'>
            <main className='main-container'>
                <h3 className='main-title'>BẢNG THỐNG KÊ HÀNG HÓA</h3>
                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG SỐ LƯỢNG ĐƠN HÀNG</h3>
                            <FaShoppingCart className='card_icon' />
                        </div>
                        <h1>{getTotalOrderQuantity()}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG ĐƠN HÀNG THIẾT KẾ</h3>
                            <FaShoppingCart className='card_icon' />
                        </div>
                        <h1>{getTotalDesignOrderQuantity()}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>THÁNG CÓ NHIỀU ĐƠN NHẤT</h3>
                            <FaShoppingCart className='card_icon' />
                        </div>
                        <h1 className='card-text'>{getMonthWithMostOrders()}</h1>
                    </div>
                </div>

                <div className='charts'>
                    <div className="chart order">
                        <h3 className="chart-title">TỔNG SỐ LƯỢNG ĐƠN HÀNG</h3>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={1000}
                                height={600}
                                data={data}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="order" fill="#8884d8" name='đơn cho sản phẩm có sẵn' />
                                <Bar dataKey="custom" fill="#82ca9d" name='đơn thiết kế' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default OrderDashboard