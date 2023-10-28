import React, { useContext, useState } from 'react';
import './ItemCart.css';
import { CartContext } from '../../Context/CartContext';

const ItemCart = ({name, img, amount, price, id }) => {
  const { deleteItemToCart, addItemToCart } = useContext(CartContext);
 
  const handleAddItem = () => {
    const product = { id, name, img, price };
    addItemToCart(product);
  };

  const handleRemoveItem = () => {
    const product = { id, name, img, price };
    deleteItemToCart(product);
  };

  return (
    <div className='cart-Item'>
      <img src={img} alt={name}  className='img-cartItem'/>
      <div className='data-Container'>
        <div className='left'>
          <p>{name}</p>
          <div className='center'>
        <div className='counters' >
        
        <button className='buttonn' onClick={handleRemoveItem} ><p>-</p></button>
        <h4 className='number' >{amount}</h4>
        <button className='buttonn' onClick={handleAddItem} ><p>+</p></button>
       
    
    
</div>
<p className='h'>${amount * price}</p>

    </div>
        </div>
        
      </div>
    </div>
  );
};

export default ItemCart;