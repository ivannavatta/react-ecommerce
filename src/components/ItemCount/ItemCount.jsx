import React, { useState } from 'react'
import '../steelheets/ItemCount.css'
export const ItemCount = ({ stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }
  return (
    <div className='center'>
        <div className='counter' >
        
        <button className='button' onClick={decrement} ><p>-</p></button>
        <h4 className='number' >{quantity}</h4>
        <button className='button' onClick={increment} ><p>+</p></button>
    
    
</div>
    </div>
    
  )
}

