import React from 'react'
import Producto from './Producto'
import {Spinner} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
const ProductosList = ({data}) => {
  return (
    <div className='listGroup'>
        {
            data.length > 0 ?
        data.map(products => <Producto key={products.id}{...products} />)
        :
        <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
        <Spinner color='primary' />
       </div>
        }
</div>
   
  )
}

export default ProductosList