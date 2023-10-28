import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const localCart = localStorage.getItem('cart');
      return localCart ? JSON.parse(localCart) : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);
  }, [cart]);

  

  const addItemToCart = (product) => {
    const inCart = cart.find((productInCart) => productInCart.id === product.id);
  
    if (inCart) {
      const newAmount = inCart.amount + 1;
  
      if (newAmount <= inCart.stock) {
        setCart(
          cart.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: newAmount };
            } else {
              return productInCart;
            }
          })
        );
      }
    } else {
      if (product.amount < product.stock) {
        setCart([...cart, { ...product, amount: 1 }]);
      }
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cart.find((productInCart) => productInCart.id === product.id);
    if (inCart) {
      if (inCart.amount === 1) {
        setCart(cart.filter((productInCart) => productInCart.id !== product.id));
      } else {
        setCart(
          cart.map((productInCart) => {
            if (productInCart.id === product.id) {
              return { ...inCart, amount: inCart.amount - 1 };
            } else {
              return productInCart;
            }
          })
        );
      }
    }
  };
  

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, deleteItemToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};