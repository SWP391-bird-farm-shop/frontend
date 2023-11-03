import React, { useEffect, useState } from "react";
import "./ManageAccount.css";
import "../RolePage.css";
import api from "../../../components/utils/requestAPI";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

// Sample user account data (replace with your data)
const userAccounts = [
  {
    UserID: 1,
    RoleID: 1,
    ImageURL: "user1.jpg",
    UserName: "john_doe",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com",
  },
  {
    UserID: 2,
    RoleID: 2,
    ImageURL: ":user2.jpg",
    UserName: "j:ane_smith",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com",
  },
  {
    UserID: 3,
    RoleID: 3,
    ImageURL: "user2.jpg",
    UserName: "jane_smith",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com",
  },
  {
    UserID: 4,
    RoleID: 4,
    ImageURL: "user2.jpg",
    UserName: "jane_smith",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com",
  },
  {
    UserID: 5,
    RoleID: 4,
    ImageURL: "user2.jpg",
    UserName: "jane_smith",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com",
  },
  {
    UserID: 6,
    RoleID: 4,
    ImageURL: "user2.jpg",
    UserName: "jane_smith",
    PassWord: "******",
    FullName: "string",
    Gender: 1,
    DateOfBird: "2023-10-15",
    Address: "string@gmail.comg krrrrrrrrrrrrrrrrrrrrr",
    PhoneNumber: "19237192811",
    Email: "string@gmail.com krrrrrrrrrrrrrrrrrrrrr",
  },
];

const ManageAccount = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  const [listUser, setListUser] = useState(null);

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

  useEffect(() => {
    fetchData();
  }, [handleDelete]);

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
            <th>UserID</th>
            <th>RoleID</th>
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
              <td>{user.userId}</td>
              <td>{user.roleId}</td>
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
                <button className="update-button">
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
