import React, { useEffect, useState } from 'react'
import { getIdData } from '../Products/Products';
import ProductsDetails from './ProductsDetails';
import { useParams } from 'react-router-dom';

const ProductsDetailsContainer = () => {
    const [data, setData] = useState(null)
    const {id} = useParams()
    useEffect(()=>{
        getIdData(id)
        .then((res) => {
            if (res !== null) {
              setData(res);
            } else {
              console.log('Producto no encontrado');
            }
          })
        .catch(err => console.log(err))
        
    }, [id])
    console.log(data);
  return (
    
    <div> <ProductsDetails   {...data} /></div>
  )
}
export default ProductsDetailsContainer
