import React from 'react'
import './Item.css'

const Item = ({ id, name, img, price, stock }) => {
  return (
    

    <div className='center-contain'>

<article className='card-container' >
        <header className='header' >
            <h2 className='item-name' >
                {name}
                
            </h2>
        </header>
        <img src={img} alt={name} className='item-img' />
        <section>
            <p className='info' >
                price: ${price}
            </p>
            <p className='info'>
            available stock: {stock}
            </p>
        </section>
        <footer>
        <button className='btn-viewDetails' >view details</button>
        </footer>

    </article>

    </div>
    
    
  )
}

export default Item