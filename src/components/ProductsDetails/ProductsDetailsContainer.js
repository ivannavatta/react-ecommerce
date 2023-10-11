import React, { useEffect, useState } from 'react'
import { getIdData } from '../Products/Products'
import { useParams } from 'react-router-dom'
import ProductsDetails from './ProductsDetails'
const ProductsDetailsContainer = () => {
    const [data, setData] = useState(null)
    let{id} = useParams()
    useEffect(() =>{
    getIdData(id)
    .then((res) => {
        if (res !== null) {
          setData(res);
         
          
        }
        else {
          console.log('setData: null')
        }
      })
    .catch((err) => console.log(err))
}, [id])
console.log('data:',data);
  return (
   <ProductsDetails {...data} />
  )
}

export default ProductsDetailsContainer
