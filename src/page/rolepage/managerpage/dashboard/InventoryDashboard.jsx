import { useEffect, useState } from 'react'
import './Dashboard.css';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { FaBox, FaMoneyBillWave, FaShoppingCart, FaUsers } from 'react-icons/fa';
import api from '../../../../components/utils/requestAPI';

const InventoryDashboard = () => {

    const [allProducts, setAllProducts] = useState();

    const fetchData = async () => {
        const url = "/api/Product/Count-all-products";
        try {
            const response = await api.get(url);
            console.log(response.data);
            setAllProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const data = [
        {
            month: 1,
            cage: 100,
            food: 200,
            toy: 200,
        },
        {
            month: 1,
            cage: 500,
            food: 138,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 180,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 398,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 480,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            month: 1,
            cage: 100,
            food: 430,
            toy: 200,
        },
        {
            month: 10,
            cage: 100,
            food: 300,
            toy: 200,
        },
        {
            month: 11,
            cage: 100,
            food: 400,
            toy: 200,
        },
        {
            month: 12,
            cage: 100,
            food: 300,
            toy: 200,
        }
    ];



    // function formatCash(currency) {
    //     return currency?.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    // }

    const getTotalQuantity = (data) => {
        const totalQuantity = data.reduce((acc, entry) => acc + entry.cage + entry.food + entry.toy, 0);
        return totalQuantity;
    };

    const getTotalQuantitySold = (data) => {
        const totalQuantitySold = data.reduce((acc, entry) => acc + entry.cage + entry.food + entry.toy, 0);
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
                        <h1>{getTotalQuantity(data)}</h1>
                    </div>
                    <div className='card'>
                        <div className='card-inner'>
                            <h3>TỔNG SỐ LƯỢNG ĐÃ BÁN</h3>
                            <FaBox className='card_icon' />
                        </div>
                        <h1>{getTotalQuantitySold(data)}</h1>
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
                    <div className="chart order">
                        <h3 className="chart-title">TỔNG SỐ LƯỢNG ĐÃ BÁN</h3>
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
                                <Bar dataKey="food" fill="#8884d8" name='tổng số lượng đã bán' />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default InventoryDashboard