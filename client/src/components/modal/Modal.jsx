export default function Modal({ showModal, submitHandler, text, title }) {
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal")) {
      showModal();
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
            <button onClick={showModal}>No</button>
            <button onClick={submitHandler}>Yes</button>
          </div>
        </div>
      </div>
    </>
  );
}
