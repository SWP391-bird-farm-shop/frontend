import React, { useState } from "react";
import "./FeedbackPage.css";
import { FaTrashAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PopupModal from "../../../components/modal/PopupModal";

const FeedbackPage = () => {
  const { action } = useParams();
  // if (action === "view") {
  //   return (
  //     <div className="feedback-page">
  //       <div className="feedback-page-section">
  //         <h3 className="feedback-product">Sản phẩm 1</h3>
  //         <div className="feedback-info">
  //           <div className="feedback-user-avatar">
  //             <img src="/bocau.jpg" alt="avatar" />
  //           </div>
  //           <div className="username-and-feedback">
  //             <p className="author">John Doe</p>
  //             <p>Bình luận sản phẩm của user này</p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // } else {
    return (
      // xóa feedback
      <div className="feedback-page">
        <PopupModal />
        <div className="feedback-page-section">
          <h3 className="feedback-product">Sản phẩm 1</h3>
          <div className="feedback-info">
            <div className="feedback-user-avatar">
              <img src="/bocau.jpg" alt="avatar" />
            </div>
            <div className="username-and-feedback">
              <p className="author">John Doe</p>
              <p>Bình luận sản phẩm của user này</p>
            </div>
          </div>
        </div>
      </div>
    );
  // }
};

export default FeedbackPage;
