import React, { useState } from "react";
import "./BlogPage.css";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";

const BlogPage = () => {
  const handleButtonClick = () => {
    window.location.href = "/home";
  };

  const blogs = [
    {
      id: 1,
      title: "The Importance of Proper Bird Cage Size",
      date: "October 1, 2023",
      author: "John Smith",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      image: "bocau.jpg",
      url: "/blog-content",
    },
    {
      id: 2,
      title: "Tips for Choosing the Right Bird Toys",
      date: "September 15, 2023",
      author: "Jane Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      image: "bocau.jpg",
      url: "/blog-content",
    },
    {
      id: 3,
      title: "Tips for Choosing the Right Bird Toys",
      date: "September 15, 2023",
      author: "Jane Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      image: "bocau.jpg",
      url: "/blog-content",
    },
    {
      id: 4,
      title: "Tips for Choosing the Right Bird Toys",
      date: "September 15, 2023",
      author: "Jane Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
      image: "bocau.jpg",
      url: "/blog-content",
    },
    // Add more blogs here
  ];

  const [blogItem, setBlogItem] = useState(blogs);

  const removeBlog = (blogId) => {
    const removeBlogItem = blogItem.filter(blog => blog.id !== blogId);
    setBlogItem(removeBlogItem);
  }

  return (
    <div className="blog-page">
      <div className="blog-list">
        {blogs.map((blog) => (
          <a href={blog.url} key={blog.id} className="blog-item">
            <div className="blog-item-detail">
              <div className="blog-item-image">
                <img src={blog.image} alt="blog-image" />
              </div>
              <div className="blog-item-information">
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-meta">
                  <span className="blog-date">{blog.date}</span> . <span className="blog-author">bởi {blog.author}</span>
                </p>
                <p className="blog-description">{blog.content}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>


    // quản lí blog của staff (thêm 2 nút xóa và sửa)
    // <div className="blog-page">
    //   <div className="blog-list">
    //     {blogs.map((blog) => (
    //       <div className="blog-item">
    //         <div className="role-page-edit-button">
    //           <button onClick={handleButtonClick} className="update-button"><FaRegEdit /></button>
    //           <button onClick={() => removeBlog(blog.id)} className="remove-button"><FaTrashAlt /></button>
    //         </div>
    //         <div className="blog-item-detail">
    //           <div className="blog-item-image">
    //             <img src={blog.image} alt="blog-image" />
    //           </div>
    //           <div className="blog-item-information">
    //             <h3 className="blog-title">{blog.title}</h3>
    //             <p className="blog-meta">
    //               <span className="blog-date">{blog.date}</span> . <span className="blog-author">bởi {blog.author}</span>
    //             </p>
    //             <p className="blog-description">{blog.content}</p>
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default BlogPage;
