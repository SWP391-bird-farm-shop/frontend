import { useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';

function InventoryDashboard() {
    const data = [
        {
            name: '1',
            cage: 100,
            food: 200,
            toy: 200,
        },
        {
            name: '2',
            cage: 500,
            food: 138,
            toy: 200,
        },
        {
            name: '3',
            cage: 100,
            food: 180,
            toy: 200,
        },
        {
            name: '4',
            cage: 100,
            food: 398,
            toy: 200,
        },
        {
            name: '5',
            cage: 100,
            food: 480,
            toy: 200,
        },
        {
            name: '6',
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            name: '7',
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            name: '8',
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            name: '9',
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            name: '10',
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            name: '11',
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            name: '12',
            cage: 100,
            food: 300,
            toy: 200,
        }
    ];

    function formatCash(currency) {
        return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

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
                        <h1>200</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG SỐ LƯỢNG ĐÃ BÁN</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1>12</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>SẢN PHẨM BÁN CHẠY NHẤT</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1 className='card-text'>LỒNG CHIM A (20)</h1>
                    </div>
                </div>

                <div className='charts'>
                    <div className="chart">
                        <h3 className="chart-title">TỔNG SỐ LƯỢNG</h3>
                        {/* <ResponsiveContainer width="100%" height="100%">
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
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="cage" fill="#8884d8" name='lồng' />
                                <Bar dataKey="food" fill="#82ca9d" name='thức ăn' />
                                <Bar dataKey="toy" fill="#82ca9d" name='phụ kiện - đồ chơi' />
                            </BarChart>
                        </ResponsiveContainer> */}
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
                                <XAxis dataKey="name" />
                                <YAxis />
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
                        {/* <ResponsiveContainer width="100%" height="100%">
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
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="cage" fill="#8884d8" name='lồng' />
                                <Bar dataKey="food" fill="#82ca9d" name='thức ăn' />
                                <Bar dataKey="toy" fill="#82ca9d" name='phụ kiện - đồ chơi' />
                            </BarChart>
                        </ResponsiveContainer> */}
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
                                <XAxis dataKey="name" />
                                <YAxis />
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