import React, { useEffect, useState } from "react";
import './Feedback.css'

const ProductFeedbackList = ({ productId }) => {

    const [feedbacks, setFeedbacks] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const url = ``;
            try {
                const response = await api.get(url);
                console.log(response.data);
                setFeedbacks(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [productId])

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
        <div className="feedback-section">
            <h3 className='feedback-heading'>Đánh giá sản phẩm</h3>
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
        </div>

        // <div className="product-feedback-list">
        //     {feedbacks?.map((feedback) => (
        //         <div className="product-feedback-item">
        //             <img src={feedback?.user?.image?.imageUrl} alt="" className="product-feedback-user-avatar"></img>
        //             <div className="product-feedback-detail">
        //                 <h4 className="product-feedback-detail-username">{feedback?.userName}</h4>
        //                 <p className="product-feedback-detail-content">{feedback?.content}</p>
        //             </div>
        //         </div>
        //     ))}
        // </div>
    )
}

export default ProductFeedbackList;