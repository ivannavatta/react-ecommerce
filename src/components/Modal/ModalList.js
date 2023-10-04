import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ModalList = ({isOpen, onClose, name, price, description, stock, img}) => {
    if(!isOpen) return 
  return (
    
    <div  style={{
        position: 'fixed',
        top: '0',
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.7)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1000',
        }}>
        
    <div style={{
        position: 'relative',
       background: '#fff',
       padding: '20px',
       borderRadius: '5px',
       boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
       textAlign: 'center',
       width: '40%',
       minHeight: '60%'
      }}>
        <header style={{
            borderBottom: '1px solid #ccc',
            paddingBottom: '10px',
            marginBottom: '10px'
            }}>
                <span className='close-button'  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '24px',
                    cursor: 'pointer',
                    color: '#333', 
                    zIndex: '1',
                    }} onClick={onClose}>x</span>
            <h1 style={{ fontSize: '24px', marginTop: '2rem' }}> Title:{name} </h1>
        </header>
        
        <div style={{ width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
          <img src={img} alt={name} style={{ width: '40%', objectFit: 'cover' }} />
        </div>
        <p style={{ marginTop: '10px', fontSize: '16px' }}>Description: {description} </p>
        <p style={{ fontSize: '20px', fontWeight: 'bold' }}>Price: $ {price} </p>
        <p style={{ fontSize: '16px', marginBottom: '20px' }}>Available Stock: {stock} </p>
        <ItemCount initial={1} stock={stock}/>
        <footer style={{
            borderTop: '1px solid #ccc',
            paddingTop: '10px',
            marginTop: '10px'
            }}>
            <button style={{background: '#333', 
            border: 'none', 
            width: '100%', 
            borderRadius: '5px', 
            color: '#fff',
            padding: '10px 20px',
            cursor: 'pointer',
            marginTop: '10px',
            }} onClick={onClose} >Close</button>
             {console.log('name', name)}
        </footer>
      </div> 
     
     </div>
   
  )
  
}

export default ModalList