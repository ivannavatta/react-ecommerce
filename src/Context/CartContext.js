import React, { createContext, useEffect, useState } from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
        try {
            const localCart = localStorage.getItem('cart')
            return localCart? JSON.parse(localCart) : []
        }
        catch (error) {
            return []
        }
    });

    useEffect(() =>{
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(cart);

    }, [cart])
    const addItemToCart = product => {
        const inCart = cart.find(productInCart => productInCart.id === product.id);
        if (inCart) {
            setCart
            (cart.map(productInCart => productInCart.id === product.id? {...inCart, quantity: inCart.quantity + 1} : productInCart))
        } else {
            setCart([...cart, {...product, quantity: 1}])
        }

        const delateItemToCart = product => {
            const inCart = cart.find(productInCart => productInCart.id === product.id);
            if (inCart.quantity === 1) {
                setCart(
                    cart.filter(productInCart => productInCart.id !== product.id)
                    )
            }
            else
            {
                setCart(productInCart => {
                    if (productInCart.id === product.id) {
                        return {...inCart, quantity: inCart.quantity - 1}
                    } 
                    else{
                        return productInCart
                    }
                })
            }
        }
        return (
            <CartContext.Provider value={{cart, addItemToCart, delateItemToCart}}>
                {children}
            </CartContext.Provider>
        )
    }
}