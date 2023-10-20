import React from "react";
import RelatedPost from "../components/related-post/RelatedPost";
import "./BlogContentPage.css";

const BlogContentPage = () => {
    const blogs = [
        {
            id: 1,
            title: "The Importance of Proper Bird Cage Size",
            date: "October 1, 2023",
            author: "John Smith",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...",
            image: "sao.jpg",
        },
        // Add more blogs here
    ];

    return (
        <div className="blog-content-page">
            {blogs.map((blog) => (
                <div key={blog.id} className="blog-content-item">
                    <div className="blog-content-item-information">
                        <h2 className="blog-content-title">{blog.title}</h2>
                        <p className="blog-content-meta">
                            <span className="blog-content-date">{blog.date}</span> . <span className="blog-content-author">bởi {blog.author}</span>
                        </p>
                    </div>
                    <div className="blog-content-section">
                        <img className="blog-content-section-image" src={blog.image} alt="blog-content-image" />
                        <h3 className="blog-content-section-heading">Hello how are you today</h3>
                        <p className="blog-content-section-content">{blog.content}</p>
                    </div>
                </div>
            ))}
            <RelatedPost />
        </div>
    );
};

export default BlogContentPage;
