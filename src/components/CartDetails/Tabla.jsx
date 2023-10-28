import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { MdOutlineDiscount } from "react-icons/md";
const ShoppingCart = () => {
 const {cart} = useContext(CartContext)
 const subtotal = cart.reduce((prev, current) => prev + current.amount * current.price, 0)
 const total = cart.reduce((prev, current) => prev + current.amount * current.price, 0)
 const [discountCode, setDiscountCode] = useState('');
 const [appliedDiscount, setAppliedDiscount] = useState(null);


 // Función para manejar el cambio en el campo de entrada de código de descuento
 const handleDiscountCodeChange = (event) => {
  setDiscountCode(event.target.value);
};

// Función para aplicar el código de descuento
const applyDiscountCode = () => {
  const descuento = document.getElementById('descuento');
 const discountCode = 'discount'
 if(descuento.value.toLowerCase() === discountCode){
  const discountedPrice = total * 0.9;

  setAppliedDiscount(discountedPrice);
 }
}
  return (
    
    <div className="shopping-cart">
      
          
          <h1 className='h1-table'>Resumen de compra</h1>
          <table className="cart-table">
            <thead>
              <tr >
                <td className="subtotal-header">SubTotal</td>
                <td></td>
                <td className="subtotal-value">${subtotal}</td>
              </tr>
            </thead>
            <tbody>
            
              <tr>
                
                <td className='discount'><i><MdOutlineDiscount/></i>Introduci codigo de descuento.</td>
              </tr>
              <tr >
                
              
                <td>
                  <input
                   id='descuento'
                    type="text"
                    onChange={handleDiscountCodeChange}
                    value={discountCode}
                  />
                </td>
                <td></td>
               <td>
                <button onClick={applyDiscountCode} className='buttonss'>Calcular</button>
               </td>
              </tr>
              <tr className='total-compra'>
                <td>Total:</td>
                <td></td>
                <td>${appliedDiscount !== null ? appliedDiscount : total}</td>
              </tr>
            </tbody>
          </table>
          <div className='container-buy-button'>
          <button  className='button-buy'>Comprar</button>
          </div>
    </div>
  );
};

export default ShoppingCart;
