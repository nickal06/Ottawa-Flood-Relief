import "./modal.css";

export function Modal({ children, close }) {
  return (
    <div className="overlay">

      <div className="modal-window">

        <button 
          className="close-button"
          onClick={close}
        >
          X
        </button>

        {children}

      </div>

    </div>
  );
}