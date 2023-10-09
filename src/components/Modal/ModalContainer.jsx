import React, { useEffect, useState } from 'react'
import { getIdData } from '../Products/Products'
import ModalList from './ModalList'

const ModalContainer = ({isOpen, onClose, id}) => {
    const [modal, setModal] = useState(null)
   
    useEffect(()=>{
        getIdData(id)
        .then((res) => {
            if (res !== null) {
              setModal(res);
            } else {
              console.log('Producto no encontrado');
            }
          })
        .catch(err => console.log(err))
        
    }, [])
  return (
    
    <div>{modal && <ModalList isOpen={isOpen} onClose={onClose}  {...modal} />}</div>
  )
}

export default ModalContainer