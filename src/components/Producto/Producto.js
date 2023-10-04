import React, { useState } from 'react';
import '../steelheets/Producto.css';

import ModalList from '../Modal/ModalList';



const Producto = ({ id, name, img, price, stock }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'
  };

  return (
    <div className='center-contain'>
      <article className='card-container'>
        <header className='header'>
          <h2 className='item-name'>{name}</h2>
        </header>
        <img src={img} alt={name} className='item-img' />
        <section>
          <p className='info'>price: ${price}</p>
          <p className='info'>available stock: {stock}</p>
        </section>
        <footer>
          <button className='btn-viewDetails' onClick={openModal}>
            view details
          </button>
          <ModalList isOpen={isModalOpen} onClose={closeModal} />
          
          
        </footer>
      </article>
    </div>
  );
};

export default Producto;