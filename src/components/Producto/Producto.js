import React, { useState } from 'react';
import '../steelheets/Producto.css';
import ModalContainer from '../Modal/ModalContainer';
import plus from './asset/icons8-plus (1).svg'



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
  const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);
        setTimeout(() => setIsClicked(false), 1000); 
        setTimeout(() =>  openModal(), 500)
       
    }
    
    
  return (
    
    <div className='center-contain'>
      <article className='card-container'>
        <header className='header'>
          <h2 className='item-name'>{name}</h2>
        </header>
        <img src={img} alt={name} className='item-img' />
        <div>
          <p className='info'>Price: ${price}</p>
          <p className='info'>Available stock: {stock}</p>
        </div>
        <footer>
         
         <button className={`btn-viewDetails ${isClicked ? 'clicked' : ''}`}  onClick={handleClick}> <span className='text' >View details</span>
          <span className='icon' aria-hidden='true' >
         <img src={plus} className='plus-icon'/>
          </span>
          </button>
          
           
          
          <ModalContainer isOpen={isModalOpen} onClose={closeModal} id={id} />
         
          
          
        </footer>
      </article>
    </div>
   
  );
};

export default Producto;