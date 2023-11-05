import React, { useState } from "react";
import "../RolePage.css";
import { Link } from "react-router-dom";

import {Modal} from 'react-bootstrap';

const AdminPage = () => {
    const [popup, serPopup] = useState(true);
    
    return (
        <div className="role-page">
            <h1 className="role-page-welcome">Xin chào Tên của quản lí</h1>
            <h2 className="role-page-manage-tasks-title">Mời bạn chọn các tác vụ dưới đây để quản lí</h2>
            <div className="role-page-manage-tasks">
                <Link to="/manage-account" className="role-page-manage-task">
                    <h3 className="role-page-manage-task-title">Quản lí tài khoản</h3>
                    <img src="./vet.jpg" className="role-page-manage-task-img" />
                </Link>
            </div>
            <Modal show={popup} onHide={() => setPopup(false)}>
                <div>
                    <button onClick={() => setPopup(false)}>X</button>
                    <h2>
                        Wellcome to Admin Page, have a nice day in work.
                    </h2>
                </div>
            </Modal>
        </div>
    );
};

export default AdminPage;
