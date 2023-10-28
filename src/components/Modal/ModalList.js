import React, { useState } from 'react'
import '../steelheets/Modal.css'
import { Link } from 'react-router-dom'

const ModalList = ({isOpen, onClose, name, price, description, stock, img, id}) => {

    if(!isOpen) return 
  return (
    
    <div className='div-center-container' >
        
    <div className='div-container' >
        <header className='header-modal '>
                <span className='close-button'  onClick={onClose}>x</span>
            <h1 className='h1-title'> {name} </h1>
        </header>
        
        
          <img src={img} alt={name} className='img-style' />
        
        <p className='info-description'> {description} </p>
        <p className='info-price' >Price: $ {price} </p>
        <p className='info-stock'>Available Stock: {stock} </p>
      
        <footer className='footer-modal'>
            <button className='close-button-footer' onClick={onClose} >Close</button>
           <Link to={`/products/${id}`} >
           <button className='comprar-button-footer' onClick={onClose} >Buy</button>
           </Link> 
           
            
        </footer>
      </div> 
     
     </div>
   
  )
  
}

export default ModalList