import React from 'react'
import ItemListContainer from '../ItemListConainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'

const Products = () => {
  return (
    <>
    <div>holaaaaaaaa</div>
    <ItemListContainer/>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('cantidad agregada', quantity)}/>
    </>
    
  )
}

export default Products