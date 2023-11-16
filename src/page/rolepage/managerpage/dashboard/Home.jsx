import React from 'react'
import './Dashboard.css';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
  from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
  from 'recharts';

function Home() {

  const data = [
    {
      name: '1',
      đơn: 1000,
      đồng: 5000,

    },
    {
      name: '2',
      đơn: 5000,
      đồng: 1398,
      amt: 2210,
    },
    {
      name: '3',
      đơn: 100,
      đồng: 9800,
      amt: 2290,
    },
    {
      name: '4',
      đơn: 100,
      đồng: 3908,
      amt: 2000,
    },
    {
      name: '5',
      đơn: 100,
      đồng: 4800,
      amt: 2181,
    },
    {
      name: '6',
      đơn: 100,
      đồng: 3800,
      amt: 2500,
    },
    {
      name: '7',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    },
    {
      name: '8',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    },
    {
      name: '9',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    },
    {
      name: '10',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    },
    {
      name: '11',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    },
    {
      name: '12',
      đơn: 100,
      đồng: 4300,
      amt: 2100,
    }
  ];


  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>Orders</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>10</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
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
            <Bar dataKey="đồng" fill="#8884d8" />
            <Bar dataKey="đơn" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

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
            <Line type="monotone" dataKey="đồng" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="đơn" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
    </main>
  )
}

export default Home