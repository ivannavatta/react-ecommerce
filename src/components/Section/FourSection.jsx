import React from 'react'
import '../steelheets/FourSection.css'
import { BiHeart } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { products } from '../Products/Products';
const FourSection = () => {
    
  return (
   <section className='shop'>
    <div className="middle-text">
        <h4>Explore Our Products</h4>
        <h2>Lets Check Popular Products</h2>
        
    </div>
    <div className="shop-content ">
       {
        products.slice(3, 6).map(product => (
            <>
            <div className='row'>
                <img src={product.img}/>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
            
            <div className='in-text'>
                <div className='price'>
                    <h5>${product.price}</h5>
                </div>
                <div className='s-btn'>
                    
                    <Link to={`/products/${product.id}`} href="">View Details</Link>
                </div>
            </div>
            <div className='top-icon'>
                <a href="">
                    <i> <BiHeart/></i>
                   
                </a>
            </div>
            </div>
            </>
        ) )}

    </div>

    <div className="row-btn">
        <Link className='btn' to={'/products'}>All Products<i><BiPlay/></i></Link>
    </div>
    
   </section>
  )
}

export default FourSection