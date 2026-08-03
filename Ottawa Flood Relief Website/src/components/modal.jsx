import "./modal.css";

export function Modal({ children, close }) {
  return (
    <div className="overlay">

      <div className="modal-window">

        <button 
          className="close-button-modal"
          onClick={close}
        >
          X
        </button>

        {children}

      </div>

    </div>
  );
}