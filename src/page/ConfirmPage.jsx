import React from "react";
import "./ConfirmPage.css";
import ProductFeedbackList from "../components/feedback/ProductFeedbackList";
import Feedback from "../components/feedback/Feedback";

const ConfirmPage = () => {
  // const products = [
  //   'Lồng 1',
  //   'Lồng 2',
  //   'Lồng 3',
  // ]

  const orders = [
    {
      id: 1,
      name: "product 1",
      price: "$19.99",
      description: "Description of Confirmed Product 1",
      status: "Đã xác nhận",
    },
    {
      id: 2,
      name: "Chim Họa Mi",
      price: "$29.99",
      description: "Description of Confirmed Product 2",
      status: "Đã xác nhận",
    },
    {
      id: 3,
      name: "Waiting Product 1",
      price: "$9.99",
      description: "Description of Waiting Product 1",
      status: "Đang chờ xác nhận",
    },

  ];


  const confirmedOrders = orders.filter((order) => order.status === "Đã xác nhận");

  return (
    <div className="confirm-page">
      <h1 className="confirm-page-title">Danh sách đơn hàng đã xác nhận</h1>
      <div className="confirmed-orders">
        {confirmedOrders.map((order) => (
          <div key={order.id} className="confirmed-order">
            <h3 className="confirmed-order-id">Mã đơn hàng: {order.id}</h3>
            <div className="confirmed-order-detail">
              <div className="confirmed-order-customer-info-section">
                <p>Tên khách hàng: John Doe</p>
                <p>Số điện thoại: (555) 123-4567</p>
                <p>Địa chỉ: 123 Main St</p>
              </div>
              <div className="confirmed-order-product">
                <p className="confirmed-order-product-name">{order.name}</p>
              </div>
              <div className="confirmed-order-price-status">
                <p className="confirmed-order-price">{order.price}</p>
                <p className="confirmed-order-status">Trạng thái: {order.status}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Feedback />
    </div>
  );
};

export default ConfirmPage;
