import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import { MdOutlineDiscount } from "react-icons/md";
import { addDoc, collection, updateDoc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig'
import FormList from '../Form/FormList';
const ShoppingCart = ({ email, nombre, phone}) => {
 const {cart} = useContext(CartContext)
 const subtotal = cart.reduce((prev, current) => prev + current.amount * current.price, 0)
 const total = cart.reduce((prev, current) => prev + current.amount * current.price, 0)
 const [discountCode, setDiscountCode] = useState('');
 const [appliedDiscount, setAppliedDiscount] = useState(null);
const [order, setOrder] = useState('')


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

const ordersCollection = collection(db, 'orders');
const createOrder = () => {
  if (email && nombre && phone) {
      const total = cart.reduce((prev, current) => prev + current.price, 0);
      const orderData = {
        buyer: {
          name: nombre,
          phone: phone,
          email: email
        },
        items: [...cart],
        total: total
      };

      addDoc(ordersCollection, orderData)
        .then(({ id }) => setOrder(id))
        .catch((error) => {
          // Manejar errores, si es necesario
          console.error("Error al crear la orden:", error);
        });

      console.log(order);
    
  } else {
    
    console.log("Debe iniciar sesión para realizar la compra.");

  }
};




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
          <button  className='button-buy' onClick={createOrder}>Comprar</button>
          </div>
          {order && <h1>ID de la orden: {order}</h1>}
          {!email && !nombre && !phone && <h1>Debe iniciar sesión para realizar la compra.</h1>}
          {console.log('name:',nombre)}
          {console.log('email:',email)}
          {console.log('totsl:',total)}
        
        
    </div>
   
  );
};

export default ShoppingCart;
