import React, { useEffect, useState } from 'react'
import { getIdData } from '../Products/Products'
import ModalList from './ModalList'

const ModalContainer = ({ isOpen, onClose, id }) => {
  const [modalData, setModalData] = useState(null)
  const productId = id

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getIdData(id);
        if (data) {
          setModalData(data);
        } else {
          console.log('Producto no encontrado');
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [id]);

  return (
    <div>
      {modalData && (
        <ModalList isOpen={isOpen} onClose={onClose} {...modalData} id={productId}/>
      )}
    </div>
  )
}

export default ModalContainer

