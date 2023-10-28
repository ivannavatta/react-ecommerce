import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import './CartDetails.css';

import TablaResumen from './Tabla';
import ShoppingCart from './Tabla';
import { Link } from 'react-router-dom';



const CartDetails = () => {
  const { cart } = useContext(CartContext);

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
     <ShoppingCart/>
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
