export default function Modal({ showDelete, submitHandler, text, title }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      showDelete();
    }
  };
  return (
    <>
      <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
          <p>{text}</p>
          <p>
            <u>{title}</u>
          </p>
          <div className="modal-buttons">
            <button onClick={showDelete}>No</button>
            <button onClick={submitHandler}>Yes</button>
          </div>
        </div>
      </div>
    </>
  );
}
