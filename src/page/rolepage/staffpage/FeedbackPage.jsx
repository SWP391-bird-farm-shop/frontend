import React, { useState } from "react";
import "./FeedbackPage.css";
import { FaTrashAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PopupModal from "../../../components/modal/PopupModal";

const FeedbackPage = () => {
  const { action } = useParams();
  const [listFeedback, setListFeedback] = useState(null);
  const [result, setResult] = useState(false);
  const [id, setId] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const fetchData = async () => {
    const url = "";
    try {
      const response = await api.get(url);
      console.log(response.data);
      setListFeedback(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const url = '';
    try {
      const response = await api.delete(url);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [handleDelete]);

  const handlePopup = (id) => {
    setShowPopup(true);
    setId(id);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  if (result) {
    handleDelete(id);
    setResult(false);
  }

  if (action === "view") {
    return (
      <div className="feedback-page">
        {listFeedback.map((feedback) => {
          <div className="feedback-page-section">
            <h3 className="feedback-product">{feedback.productId}</h3>
            <div className="feedback-info">
              <div className="feedback-user-avatar">
                <img src={feedback.imageUrl} alt="avatar" />
              </div>
              <div className="username-and-feedback">
                <p className="author">{feedback.userName}</p>
                <p>{feedback.content}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    );
  } else {
    return (
      // xóa feedback
      <div className="feedback-page">
        <button
          className="remove-button"
          onClick={() => handlePopup(voucher.voucherId)}
        >
          <FaTrashAlt />
        </button>
        {showPopup && (
          <PopupModal
            action={"remove"}
            statusReturn={result}
            setStatusReturn={setResult}
            open={showPopup}
            onClose={handleClose}
          />
        )}
        {listFeedback.map((feedback) => {
          <div className="feedback-page-section">
            <h3 className="feedback-product">{feedback.productId}</h3>
            <div className="feedback-info">
              <div className="feedback-user-avatar">
                <img src={feedback.imageUrl} alt="avatar" />
              </div>
              <div className="username-and-feedback">
                <p className="author">{feedback.userName}</p>
                <p>{feedback.content}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    );
  }
};

export default FeedbackPage;
