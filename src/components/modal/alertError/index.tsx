// Modal.js
import style from "./index.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

const Modal = ({ isOpen, onClose, title, message }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div
      className={style.modal__overlay}
      onClick={onClose}
      data-testid="modal-overlay"
    >
      <div
        className={style.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={style.modal__header}>
          <span className={style.modal__title}>{title}</span>
        </div>
        <div className={style.modal__text}>{message}</div>
        <div className={style.modal__footer}>
          <button onClick={() => onClose()}>Fechar</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
