import React, { useEffect, useState } from 'react'
import { getIdData } from '../Products/Products'
import ModalList from './ModalList'
const ModalContainer = () => {
    const [modal, setModal] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        getIdData(3)
        .then((res) => {
            if (res !== null) {
              setModal(res);
            } else {
              console.log('Producto no encontrado');
            }
          })
        .catch(err => console.log(err))
        .finally(() => {
            setIsLoading(false); 
          });
    }, [])
    console.log('Modal data:', modal)
  return (
    
    <div>{!isLoading && modal && <ModalList {...modal} />}</div>
  )
}

export default ModalContainer