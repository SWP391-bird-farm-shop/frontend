import { useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';

function Dashboard() {
  const data = [
    {
      x: '1',
      revenue: 1000,
      inventory: 2000,
      order: 30
    },
    {
      x: '2',
      revenue: 5000,
      inventory: 1398,
      order: 30
    },
    {
      x: '3',
      revenue: 100,
      inventory: 1800,
      order: 30
    },
    {
      x: '4',
      revenue: 100,
      inventory: 3908,
      order: 30
    },
    {
      x: '5',
      revenue: 100,
      inventory: 4800,
      order: 30
    },
    {
      x: '6',
      revenue: 100,
      inventory: 3800,
      order: 30
    },
    {
      x: '7',
      revenue: 100,
      inventory: 4300,
      order: 30
    },
    {
      x: '8',
      revenue: 100,
      inventory: 4300,
      order: 30
    },
    {
      x: '9',
      revenue: 100,
      inventory: 4300,
      order: 30
    },
    {
      x: '10',
      revenue: 100,
      inventory: 4300,
      order: 30
    },
    {
      x: '11',
      revenue: 100,
      inventory: 4300,
      order: 30
    },
    {
      x: '12',
      revenue: 100,
      inventory: 4300,
      order: 30,
    }
  ];

  function formatCash(currency) {
    return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  const getTotalRevenue = () => {
    const totalRevenue = data.reduce((acc, entry) => acc + entry.revenue, 0);
    return formatCash(totalRevenue);
  };

  const getTotalInventory = () => {
    const totalInventory = data.reduce((acc, entry) => acc + entry.inventory, 0);
    return totalInventory;
  };

  const getTotalOrders = () => {
    const totalOrders = data.reduce((acc, entry) => acc + entry.order, 0);
    return totalOrders;
  };

  return (
    <div className='dashboard'>
      <main className='main-container'>
        <h3 className='main-title'>BẢNG THỐNG KÊ</h3>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3>DOANH THU</h3>
              <FaMoneyBillWave className='card_icon' />
            </div>
            <h1>{getTotalRevenue()}₫</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>HÀNG HÓA</h3>
              <FaBox className='card_icon' />
            </div>
            <h1>{getTotalInventory()}</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>ĐƠN HÀNG</h3>
              <FaShoppingCart className='card_icon' />
            </div>
            <h1>{getTotalOrders()}</h1>
          </div>
        </div>

        <div className='charts'>
          <div className="chart">
            <h3 className="chart-title">DOANH THU</h3>
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
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#82ca9d" name='doanh thu' />
              </BarChart>
            </ResponsiveContainer>

          </div>
          <div className="chart">
            <h3 className="chart-title">HÀNG HÓA</h3>
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
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inventory" fill="#8884d8" name='hàng hóa' />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="chart">
            <h3 className="chart-title">ĐƠN HÀNG</h3>
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
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="order" fill="#8884d8" name='đơn hàng' />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard