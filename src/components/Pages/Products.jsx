import React from 'react'
import '../steelheets/ItemList.css'
import ProductosContainer from '../Producto/ProductosContainer'
import ModalContainer from '../Modal/ModalContainer'
import ProductsDetailsContainer from '../ProductsDetails/ProductsDetailsContainer'
import Cart from '../Cart/Cart'







const Products = () => {
  
  return (
    <>
    <div><h1 className='title-products'>PRODUCTS</h1></div>
    
  
    <ProductosContainer/>
      <ModalContainer/> 

     
     
    
    </>
    
  )
}

export default Products