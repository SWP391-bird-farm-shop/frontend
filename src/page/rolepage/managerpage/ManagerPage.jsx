import React, { useState } from "react";
import "../RolePage.css";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const ManagerPage = () => {
  const { auth } = useAuth();
    const [popup,setPopup] = useState(true);
    return (

        <div className="role-page">
                 <h1 className="role-page-welcome">Xin chào {auth?.user?.fullName}</h1>
            <h2 className="role-page-manage-tasks-title">Mời bạn chọn các tác vụ dưới đây để quản lí</h2>
            <div className="role-page-manage-tasks">
                <Link to={`/product/view-product`} className="role-page-manage-task">
                    <h3 className="role-page-manage-task-title">Quản lí sản phẩm</h3>
                    <img src="./vet.jpg" className="role-page-manage-task-img" />
                </Link>
                <Link to={`/voucher/view-voucher`} className="role-page-manage-task">
                    <h3 className="role-page-manage-task-title">Quản lí voucher</h3>
                    <img src="./vet.jpg" className="role-page-manage-task-img" />
                </Link>
            </div>
            <Modal show={popup} onHide={() => setPopup(false)}>
                <div>
                    <button onClick={() => setPopup(false)}>X</button>
                    <h2>
                        Wellcome to Manage Page.
                    </h2>
                </div>
            </Modal>
        </div>
    );
};

export default ManagerPage;
