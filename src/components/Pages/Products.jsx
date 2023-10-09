import React from 'react'
import '../steelheets/ItemList.css'
import ProductosContainer from '../Producto/ProductosContainer'
import ModalContainer from '../Modal/ModalContainer'
import ProductsDetailsContainer from '../ProductsDetails/ProductsDetailsContainer'







const Products = () => {
  
  return (
    <>
    <div><h1 className='title-products'>Products</h1></div>
    
   
    <ProductosContainer/>
      <ModalContainer/> 
     <ProductsDetailsContainer/>
     
     
    
    </>
    
  )
}

export default Products