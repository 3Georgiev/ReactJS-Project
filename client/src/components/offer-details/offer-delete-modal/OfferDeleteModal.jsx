import { useNavigate } from "react-router-dom";
import { remove } from "../../../services/offerService";
import Path from "../../../paths";

export default function OfferDeleteModal({ showDelete, title, offerId }) {
  const navigate = useNavigate();
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      showDelete();
    }
  };

  const deleteButtonHandler = () => {
    remove(offerId);
    navigate(Path.Offers);
  };
  return (
    <>
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          <p>Are you sure you want to delete this offer?</p>
          <p>
            <u>{title}</u>
          </p>
          <div className="modal-buttons">
            <button onClick={showDelete}>Cancel</button>
            <button onClick={deleteButtonHandler}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
