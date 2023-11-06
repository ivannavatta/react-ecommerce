import React, { useContext, useState } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartDetails.css';

import TablaResumen from './Tabla';
import ShoppingCart from './Tabla';
import { Link } from 'react-router-dom';
import gift from './assets/gift.png'


const CartDetails = ({ email, nombre, phone }) => {
  const { cart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
  };


  


  return (
   <>
    {cart.length > 0 ? 
    (
      <div className='hyper-conatiner'>
     
      <div className='cart-containerr'>
      <table className='title-table'>
        <thead>
          <tr className='header-container'>
            <th className='product-cart'>Product</th>
            <th></th>
            <th className='product-price'>Price</th>
            <th className='product-quantity'>Amount</th>
            
            <th className='quantity-price'>SubTotal</th>
            
        
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <>
            <tr key={product.id} className='product-item-container'>
               {/* response movile */}
               <div className='response-div'>
               <td className='product-Img'>
              <Link to={`/products/${product.id}`}>  <img src={product.img} alt={product.name} className='img-cart-products' /> </Link>
              </td>
              <td className='product-Name'>
              <Link to={`/products/${product.id}`}> <h2 className='name-cart-products'>{product.name}</h2> </Link>
              </td>
               </div>
               {/* -------- */}

                <td className='product-img'>
                <Link to={`/products/${product.id}`}>   <img src={product.img} alt={product.name} className='img-cart-products' /> </Link>
              </td>
              <td className='product-name'>
              <Link to={`/products/${product.id}`}>   <h2 className='name-cart-products'>{product.name}</h2> </Link>
              </td>

              {/* response movile */}
              <div className='response-div'>
              <td className='product-Price'>
                <h2 className='price-cart-products'>${product.price}</h2>
              </td>
              <td className='product-quantity-Cart'>
                <h2 className='amount-cart-products'>{product.amount}</h2>
              </td>
              </div>
              {/* ----- */}

              <td className='product-price'>
                <h2 className='price-cart-products'>${product.price}</h2>
              </td>
              <td className='product-quantity-cart'>
                <h2 className='amount-cart-products'>{product.amount}</h2>
              </td>
             
              
              <td className='quantity-price-cart'>
                <h2 className='price-cart-products'>${product.amount * product.price}</h2>
              </td>
                
             
            </tr>
          
             </>
          ))}
        </tbody>
      </table>
    </div>
     <ShoppingCart email={email} nombre={nombre} phone={phone}/>
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
  : (
   <div  className='container-empty-cart'>
    <h1 style={{ color: '#fff', textAlign: 'center',  }}>
    El carrito está vacío
  </h1>
 <Link to={'/products'} className='link'> <p className='keep-buying'>Seguir Comprando</p></Link>
  </div>
  )
  }
    
    </>
    
   
  );
};

export default CartDetails;
