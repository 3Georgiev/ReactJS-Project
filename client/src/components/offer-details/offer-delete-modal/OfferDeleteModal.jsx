export default function OfferDeleteModal({ showDelete }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      showDelete();
    }
  };
  return (
    <>
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          <p>Are you sure you want to delete this offer?</p>
          <p>This action cannot be undone!</p>
          <div className="modal-buttons">
            <button onClick={showDelete}>Cancel</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}
