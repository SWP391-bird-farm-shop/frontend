import React, { useEffect, useState } from "react";
import "./OrderStatusPage.css";
import useAuth from "../hooks/useAuth";
import api from "../components/utils/requestAPI";

const ConfirmPage = () => {
  const { auth } = useAuth();
  // const products = [
  //   'Lồng 1',
  //   'Lồng 2',
  //   'Lồng 3',
  // ]

  const [order, setOrder] = useState(null);

  const fetchData = async () => {
    const url = "/api/Order/get-paid";
    const data = {
      userID: auth?.user?.userId,
    };
    try {
      const response = await api.post(url, data);
      console.log(response.data);
      setOrder(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [auth]);

  if (order?.length > 0) {
    return (
      <div className="confirm-page">
        <h1 className="confirm-page-title">Danh sách đơn hàng</h1>
        <div className="confirmed-orders">
          {order?.map((detail) => (
            <div key={detail.orderId} className="confirmed-order">
              <h3 className="confirmed-order-id">
                Mã đơn hàng: {detail.orderId}
              </h3>
              <div className="confirmed-order-detail">
                <div className="confirmed-order-customer-info-section">
                  <p>Tên khách hàng: John Doe</p>
                  <p>Số điện thoại: (555) 123-4567</p>
                  <p>Địa chỉ: 123 Main St</p>
                </div>
                <div className="confirmed-order-product">
                  {detail?.orderDetail?.map((item) => (
                    <p className="confirmed-order-product-name">
                      {item.product?.productName}
                    </p>
                  ))}
                </div>
                <div className="confirmed-order-price-status">
                  <p className="confirmed-order-price">₫{detail.total}</p>
                  {detail.status ? (
                    <p className="confirmed-order-status">
                      Trạng thái: Đã xác nhận
                    </p>
                  ) : (
                    <p className="confirmed-order-status">
                      Trạng thái: Chưa xác nhận
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="confirm-page">
        <h1 className="confirm-page-title">Danh sách đơn hàng đã xác nhận</h1>
        <div className="confirmed-orders">
          <div className="empty-cart-confirm">
            <img
              src="/empty-cart.png"
              alt="empty-cart"
              className="empty-cart-confirm-img"
            />
            <h3 className="empty-cart-confirm-text">
              Bạn chưa thêm sản phẩm vào giỏ hàng
            </h3>
          </div>
        </div>
      </div>
    );
  }
};

export default ConfirmPage;
