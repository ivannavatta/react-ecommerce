import React, { useEffect, useState } from 'react'
import Producto from '../Producto/Producto'
import Spinner from '../Spinner/Spinner'
import '../steelheets/ItemList.css'
import ProductsDetails from '../ProductsDetails/ProductsDetails'
import { getFirestore, doc, getDoc, getDocs, collection } from 'firebase/firestore'
const TaskList = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const db = getFirestore()
    const itemRef = collection(db, 'items')
    getDocs(itemRef). 
    then(res => setData(res.docs.map(doc => ({ id: doc.id, ...doc.data()})
    ))
    )
  }, [])
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