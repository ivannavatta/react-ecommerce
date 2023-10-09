import React from 'react'
import Producto from '../Producto/Producto'
import Spinner from '../Spinner/Spinner'
import '../steelheets/ItemList.css'
import ProductsDetails from '../ProductsDetails/ProductsDetails'

const TaskList = ({ data }) => {
  return (
    <div className={data.length > 0 ? 'list-group' : '' }>
  
    {
        data.length > 0 ?
    data.map(products => 
      
      <Producto key={products.id}{...products} />
     
      
      
     
      
    
    )
    :
   
    <Spinner/>
   
    }

</div>
  )
}

export default TaskList