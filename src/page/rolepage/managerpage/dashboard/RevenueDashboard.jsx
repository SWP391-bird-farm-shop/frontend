import { useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';

function RevenueDashboard() {
    const data = [
        {
            name: '1',
            revenue: 500,
            expense: 200,
            income: 300,
        },
        {
            name: '2',
            revenue: 500,
            expense: 138,
            income: 200,
        },
        {
            name: '3',
            revenue: 600,
            expense: 180,
            income: 500,
        },
        {
            name: '4',
            revenue: 600,
            expense: 398,
            income: 200,
        },
        {
            name: '5',
            revenue: 500,
            expense: 480,
            income: 20,
        },
        {
            name: '6',
            revenue: 100,
            expense: 300,
            income: 200,
        },
        {
            name: '7',
            revenue: 100,
            expense: 430,
            income: 200,
        },
        {
            name: '8',
            revenue: 100,
            expense: 400,
            income: 300,
        },
        {
            name: '9',
            revenue: 100,
            expense: 430,
            income: 240,
        },
        {
            name: '10',
            revenue: 100,
            expense: 300,
            income: 206,
        },
        {
            name: '11',
            revenue: 100,
            expense: 400,
            income: 208,
        },
        {
            name: '12',
            revenue: 100,
            expense: 300,
            income: 900,
        }
    ];

    function formatCash(currency) {
        return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <div className='dashboard'>
            <main className='main-container'>
                <h3 className='main-title'>BẢNG THỐNG KÊ DOANH THU</h3>
                <div className='main-cards'>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG DOANH THU</h3>
                            <FaMoneyBillWave className='card_icon' />
                        </div>
                        <h1>₫{formatCash(3000000)}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG CHI PHÍ</h3>
                            <FaMoneyBillWave className='card_icon' />
                        </div>
                        <h1>₫{formatCash(3000000)}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG LỢI NHUẬN</h3>
                            <FaMoneyBillWave className='card_icon' />
                        </div>
                        <h1>₫{formatCash(3000000)}</h1>
                    </div>
                </div>

                <div className='charts'>
                    <div className="chart">
                        <h3 className="chart-title">TỔNG DOANH THU VÀ CHI PHÍ</h3>
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
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="revenue" fill="#8884d8" name='doanh thu' />
                                <Bar dataKey="expense" fill="#82ca9d" name='chi phí' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="chart">
                        <h3 className="chart-title">TỔNG LỢI NHUẬN</h3>
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
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="income" fill="#8884d8" name='lợi nhuận' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default RevenueDashboard