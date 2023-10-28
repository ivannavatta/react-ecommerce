import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import '../steelheets/ProductsDetails.css'
import gift from './assets/gift.png'
import { CartContext } from '../../Context/CartContext'

const ProductsDetails = ({ name, price, img, stock, day, specification, id, amount }) => {
    const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {addItemToCart} = useContext(CartContext)



  

  // Función para manejar el cambio en el campo de entrada de código de descuento
  const handleDiscountCodeChange = (event) => {
    setDiscountCode(event.target.value);
  };

  // Función para aplicar el código de descuento
  const applyDiscountCode = () => {
    const descuento = document.getElementById('descuento');
   const discountCode = 'discount'
   if(descuento.value.toLowerCase() === discountCode){
    const discountedPrice = price * 0.9;

    setAppliedDiscount(discountedPrice);
   }
    
  };
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
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
        <p className="price-details"> ${appliedDiscount !== null ? appliedDiscount : price}</p>
           <h3><b style={{color: 'green'}}>Arrives Free </b> {day}</h3>
           <p className="stock-details">Stock: {stock} units</p>
          <ItemCount initial={1} stock={stock}  />
          <h3 ><b>Available </b></h3>
          <input id='descuento' type='text' placeholder='Codigo de descuento' value={discountCode}
        onChange={handleDiscountCodeChange} className='descuento-details'/>
          <button className="dicount-button" onClick={applyDiscountCode}>
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
     {/* Botón circular */}
     <div
        className="circle-button"
        onClick={isModalOpen ? closeModal : openModal}
      >
        <img src={gift} alt="gift" className='gift' />
      </div>

      {/* Modal de mini tarjeta */}
      <div className={`mini-card-modal ${isModalOpen ? 'active' : ''}`}>
        <span onClick={closeModal} className="close-mini-card-modal">
          &times;
        </span>
        <h2>Gift</h2>
        <p>Congratulations the discount code is: "Discount".</p>
      </div>
  </div>
  )
}

export default ProductsDetails