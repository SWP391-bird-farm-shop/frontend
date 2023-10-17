import React from "react";
import "./BlogPage.css";

const BlogPage = () => {
  const blogs = [
    {
      id: 1,
      title: "The Importance of Proper Bird Cage Size",
      date: "October 1, 2023",
      author: "John Smith",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    {
      id: 2,
      title: "Tips for Choosing the Right Bird Toys",
      date: "September 15, 2023",
      author: "Jane Doe",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
    },
    // Add more blogs here
  ];

  return (
    <div className="blog-page">
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <div className="blog-item-image">
              <img src="bocau.jpg" alt="blog-image" />
            </div>
            <div className="blog-item-information">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-meta">
                <span className="blog-date">{blog.date}</span> | <span className="blog-author">{blog.author}</span>
              </p>
              <p className="blog-content">{blog.content}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
