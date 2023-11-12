import React, { useState } from "react";
import "../RolePage.css";
import { Link } from "react-router-dom";

const StaffPage = () => {

  return (
    <div className="role-page">
      <h1 className="role-page-welcome">Xin chào Tên của quản lí</h1>
      <h2 className="role-page-manage-tasks-title">
        Mời bạn chọn các tác vụ dưới đây để quản lí
      </h2>
      <div className="role-page-manage-tasks">
        <Link to="/manage-blogs/view" className="role-page-manage-task">
          <h3 className="role-page-manage-task-title">Quản lí bài viết</h3>
          <img src="./vet.jpg" className="role-page-manage-task-img" />
        </Link>
        {/* <Link to="/feedback/view" className="role-page-manage-task"> */}
        {/* <h3 className="role-page-manage-task-title">Quản lí feedback</h3> */}
        {/* <img src="./vet.jpg" className="role-page-manage-task-img" /> */}
        {/* </Link> */}
        {/* <Link to="/order" className="role-page-manage-task"> */}
        {/* <h3 className="role-page-manage-task-title">Quản lí đơn hàng</h3> */}
        {/* <img src="./vet.jpg" className="role-page-manage-task-img" /> */}
        {/* </Link> */}
      </div>
    </div>
  );
};

export default StaffPage;
