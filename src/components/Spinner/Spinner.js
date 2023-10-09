import React from 'react'
import infinite from './Infinity-2.4s-200px.svg'
const Spinner = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        
    }}>
       <img src={infinite} style={{width: '6rem'}}/> 
    </div>
  )
}

export default Spinner