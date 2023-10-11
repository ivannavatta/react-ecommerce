import React, { useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import '../steelheets/ProductsDetails.css'


const ProductsDetails = ({ name, price, img, stock, day, specification }) => {
    const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  // Función para manejar el cambio en el campo de entrada de código de descuento
  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  // Función para aplicar el código de descuento
  const applyDiscountCode = () => {
    const descuento = document.getElementById('descuento');
   const discountCode = 'descuento'
   if(descuento.value.toLowerCase() === discountCode){
    const discountedPrice = price * 0.9;

    setAppliedDiscount(discountedPrice);
   }
    
  };

  
  return (
    <div className='center-details'>
    <div className="product-card">
      <div className="product-image">
        <img src={img} alt={name} className="img-details" />
      </div>
      <div className="product-details">
        <p className="name-details"> {name}</p>
        <p className="price-details"> ${appliedDiscount !== null ? appliedDiscount : price}</p>
       
       <div className='list-specificaion'>
       <h4>What you need to know about this product</h4>
        <ul >
            {
                specification.map((specification, i) => (
                   <li key={i}>{specification} </li>
                ))
            }
            
        </ul>
       </div>
        
      </div>
      <div className='button-container'>
        {/* Tarjeta de botones */}
        <div className="button-card">
        <p className="price-details"> ${appliedDiscount !== null ? appliedDiscount : price}</p>
           <h3><b style={{color: 'green'}}>Arrives Free </b> {day}</h3>
           <p className="stock-details">Stock: {stock} units</p>
          <ItemCount initial={1} stock={stock} onAdd={quantity => console.log('Cantidad agregada:', quantity)} />
          <h3 ><b>Available </b></h3>
          <input id='descuento' type='text' placeholder='Codigo de descuento' value={discountCode}
        onChange={handleDiscountCodeChange} className='descuento-details'/>
          <button className="dicount-button" onClick={applyDiscountCode}>
            Apply Discount</button>
          <button className="buy-button">Buy Now</button>

        </div>
      </div>
    </div>
  </div>
  )
}

export default ProductsDetails