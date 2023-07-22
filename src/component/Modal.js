import React from "react";
import "../styles/Modal.css";
import { useGlobalContext } from "../Context";
import { TiDeleteOutline } from "react-icons/ti";

const Modal = () => {
  const { selectedMeal, closeModal } = useGlobalContext();

  const { image, title, text } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <div className="modal-container">
        <TiDeleteOutline className="delete-icon" onClick={closeModal} />
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking instructions</p>
          <p>{text}</p>
          <button onClick={closeModal} className="btn btn-hipster close-btn">
            Close
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Modal;
