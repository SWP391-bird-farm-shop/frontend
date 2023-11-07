import React, { useEffect, useState } from "react";
import "./ManageAccount.css";
import "../RolePage.css";
import api from "../../../components/utils/requestAPI";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

// Sample user account data (replace with your data)
const ManageAccount = () => {
  const { auth } = useAuth();

  const handleButtonClick = () => {
    window.location.href = "/";
  };

  const [listUser, setListUser] = useState(null);

  const navigate = useNavigate();

  const fetchData = async () => {
    const url = "/api/User/get-all";
    try {
      const response = await api.get(url);
      console.log(response.data);
      const list = Object.values(response.data);
      const sortList = list.sort((a, b) => a.roleId - b.roleId);
      setListUser(sortList);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const url = `/api/User/remove`;
    const data = {
      userID: id,
    };
    try {
      const response = await api.delete(url, {
        headers: {
          "Content-Type": "application/json-patch+json",
        },
        data: JSON.stringify(data),
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    navigate(`/info-setting/admin/${id}`);
  };

  useEffect(() => {
    fetchData();
  }, [auth, handleDelete]);

  return (
    // <div className="manage">
    //   <h1 className="page-title">Tài khoản</h1>
    //   <table className="user-table">
    //     <thead>
    //       <tr>
    //         <th>UserID</th>
    //         <th>RoleID</th>
    //         <th>Ảnh đại diện</th>
    //         <th>Tên đăng nhập</th>
    //         <th>Họ và tên</th>
    //         <th>Giới tính</th>
    //         <th>Ngày sinh</th>
    //         <th>Địa chỉ</th>
    //         <th>Số điện thoại</th>
    //         <th>Email</th>
    //       </tr>
    //     </thead>
    //     <tbody className="content-info">
    //       {listUser?.map((user, index) => (
    //         <tr key={index}>
    //           <td>{user.userID}</td>
    //           <td>{user.roleID}</td>
    //           <td>
    //             <img src={user.imageURL} alt={`${user.userName}`} />
    //           </td>
    //           <td className="overflow overflow-scroll short">{user.userName}</td>
    //           <td className="overflow overflow-scroll short">{user.fullName}</td>
    //           {
    //             user.gender ? (
    //               // Nội dung khi user.gender là true
    //               <td>Nam</td>
    //             ) : (
    //               // Nội dung khi user.gender là false
    //               <td>Nữ</td>
    //             )
    //           }

    //           <td>{user.dateOfBird}</td>
    //           <td className="overflow overflow-scroll">{user.address}</td>
    //           <td>{user.phoneNumber}</td>
    //           <td className="overflow overflow-scroll">{user.email}</td>
    //         </tr>
    //       ))}
    //     </tbody>
    //   </table>
    // </div>

    <div className="manage">
      <h1 className="page-title">Tài khoản</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>Ảnh đại diện</th>
            <th>Tên đăng nhập</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th>Số điện thoại</th>
            <th>Email</th>
            <th>Tác vụ</th>
          </tr>
        </thead>
        <tbody className="content-info">
          {listUser?.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.imageURL} alt={`${user.userName}`} />
              </td>
              <td className="overflow-edit overflow-scroll short">
                {user.userName}
              </td>
              <td className="overflow-edit overflow-scroll short">
                {user.fullName}
              </td>
              {user.gender ? (
                // Nội dung khi user.gender là true
                <td>Nam</td>
              ) : (
                // Nội dung khi user.gender là false
                <td>Nữ</td>
              )}

              <td>{user.dateOfBird}</td>
              <td className="overflow-edit overflow-scroll long">
                {user.address}
              </td>
              <td>{user.phoneNumber}</td>
              <td className="overflow-edit overflow-scroll long">
                {user.email}
              </td>
              <td>
                <button
                  className="update-button"
                  onClick={() => handleUpdate(user.userId)}
                >
                  <FaRegEdit />
                </button>
                <button
                  className="remove-button"
                  onClick={() => handleDelete(user.userId)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageAccount;
