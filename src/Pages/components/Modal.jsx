
import style from "../css/Modal.module.css"

const Modal = ({ show, onCloseButtonClick }) => {
    if (!show) {
      return null;
    }
  
    return (
      <div className={style.modal_wrapper}>
        <div className="modal">
          <div className="body">
            Click on the close button to close the modal.
          </div>
          <div className="footer">
            <button onClick={onCloseButtonClick}>Close Modal</button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Modal;