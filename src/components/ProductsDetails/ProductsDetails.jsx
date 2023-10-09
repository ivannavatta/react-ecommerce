import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../Products/Products'

const ProductsDetails = ({name, price}) => {
    
   
  return (
    <div>
        <p>name: {name}</p>
        <p>price: {price}</p>
    </div>
  )
}

export default ProductsDetails