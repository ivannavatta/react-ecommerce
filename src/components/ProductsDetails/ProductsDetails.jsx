import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import '../steelheets/ProductsDetails.css'
import { CartContext } from '../../Context/CartContext'

const ProductsDetails = ({ name, price, img, stock, day, specification, id, amount }) => {
 
  
  const {addItemToCart} = useContext(CartContext)



  



  
  return (
    <div className='center-details'>
        
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={name} className="img-details" />
      </div>
      <div className="product-details">
        <p className="name-details"> {name}</p>
        <p className="price-details"> ${price}</p>
       
       <div className='list-specificaion'>
       <h4>What you need to know about this product</h4>
        <ul >
        {
                specification && specification.map((specification, i) => (
                   <li key={i}>{specification} </li>
                ))
            }
            
        </ul>
  
       </div>
        
      </div>
      <div className='button-container'>
        {/* Tarjeta de botones */}
        <div className="button-card">
        <p className="price-details"> ${price}</p>
           <h3><b style={{color: 'green'}}>Arrives Free </b> {day}</h3>
           <p className="stock-details">Stock: {stock} units</p>
          <ItemCount initial={1} stock={stock}  />
          <h3 ><b>Available </b></h3>
          <input id='descuento' type='text' placeholder='Codigo de descuento'
        className='descuento-details'/>
          <button className="dicount-button" >
            Apply Discount</button>
            
          <button className="buy-button" onClick={() => {
            const product = {
              name,
              id,
              price,
              img,
              stock,
              amount
            };
            addItemToCart(product);
            console.log('Producto añadido al carrito:', product);
          }}>Buy Now</button>
         
        </div>
      </div>
    </div>
     
     
  </div>
  )
}

export default ProductsDetails