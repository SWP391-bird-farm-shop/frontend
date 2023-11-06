import React from "react";
import './Feedback.css'

const ProductFeedbackList = () => {

    const feedbackList = [
        {
            img: "./vet.jpg",
            userName: "user1",
            content: "product-feedback-detailproduct-feedback-detail",
        },
        {
            img: "./vet.jpg",
            userName: "user2",
            content: "product-feedback-detail",
        },
        {
            img: "./sao.jpg",
            userName: "user3",
            content: "product-feedback-detailproduct-feedback-detail",
        },
        {
            img: "./sao.jpg",
            userName: "user4",
            content: "product-feedback-detailproduct-feedback-detailproduct-feedback-detailproduct-feedback-detail",
        },
    ]

    return (
        <div className="product-feedback-list">
            {feedbackList.map((feedback) => (
                <div className="product-feedback-item">
                    <img src={feedback.img} alt="" className="product-feedback-user-avatar"></img>
                    <div className="product-feedback-detail">
                        <h4 className="product-feedback-detail-username">{feedback.userName}</h4>
                        <p className="product-feedback-detail-content">{feedback.content}</p>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default ProductFeedbackList;