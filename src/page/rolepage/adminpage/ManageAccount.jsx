
import React, { useEffect, useState } from "react";
import './ManageAccount.css';
import "../RolePage.css";
import api from "../../../components/utils/requestAPI";

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
    Email: "string@gmail.com"
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
    Email: "string@gmail.com"
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
    Email: "string@gmail.com"
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
    Email: "string@gmail.com"
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
    Email: "string@gmail.com"
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
    Address: "string",
    PhoneNumber: "192371928",
    Email: "string@gmail.com"
  }
];

const ManageAccount = () => {
  const handleButtonClick = () => {
    window.location.href = "/";
  };

  const [listUser, setListUser] = useState(null);

  const fetchData = async () => {
    const url = '/api/User/get-all';
    try {
      const response = await api.get(url);
      console.log(response.data);
      const list = Object.values(response.data);
      const sortList = list.sort((a, b) => a.roleId - b.roleId);
      setListUser(sortList);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="manage">
      <h1 className="page-title">List of User Account Information</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>Role ID</th>
            <th className="image-colum">Image</th>
            <th>Username</th>
            <th>FullName</th>
            <th>Gender</th>
            <th>Date Of Bird</th>
            <th>Address</th>
            <th>PhoneNumber</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody className="content-info">
          {listUser?.map((user, index) => (
            <tr key={index}>
              <td>{user.userId}</td>
              <td>{user.roleId}</td>
              <td>
                <img src={user.imageUrl} alt={`User ${user.userName}`} />
              </td>
              <td>{user.userName}</td>
              <td>{user.fullName}</td>
              {
                user.gender ? (
                  // Nội dung khi user.gender là true
                  <td>Nam</td>
                ) : (
                  // Nội dung khi user.gender là false
                  <td>Nữ</td>
                )
              }

              <td>{user.dateOfBird}</td>
              <td>{user.address}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-button" onClick={handleButtonClick}>
        Go Back
      </button>
    </div>
  );
}

export default ManageAccount;