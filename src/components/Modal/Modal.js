import React from 'react';
import '../steelheets/Modal.css'

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
    <div className="modal">
      <h2>Título del Modal</h2>
      <p>Contenido del Modal</p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  </div>
  );
};

export default Modal;