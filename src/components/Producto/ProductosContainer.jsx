import React, { useEffect, useState } from 'react'
import { getData } from '../Products/Products'
import ProductosList from './ProductosList';
const ProductosContainer = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        getData()
        .then(res => setData(res))
        .catch(err => console.log(err));
    },[])
  return (
    <div><ProductosList data={data}/></div>
  )
}

export default ProductosContainer