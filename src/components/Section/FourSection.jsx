import React, { useEffect, useState } from 'react'
import '../steelheets/FourSection.css'
import { BiHeart, BiUpArrowAlt } from "react-icons/bi";
import { BiPlay } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { products } from '../Products/Products';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
const FourSection = () => {
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
   <section className='shop'>
    <div className="middle-text">
        <h4>Explore Our Products</h4>
        <h2>Lets Check Popular Products</h2>
        
    </div>
    <div className="shop-content ">
       {
        data.slice(3, 6).map(product => (
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
    <a href="#" className='arrow-home' style={styles.arrow}><i style={styles.i}><BiUpArrowAlt/></i></a>
    
   </section>
  )
}

export default FourSection

const styles = {
    arrow: {
      
        position: 'fixed',
        bottom: '2.2rem',
        borderTop: '2rem',
        right: '3.2rem',
      },
  
      i: {
        fontSize: '22px',
        backgroundColor: 'rgb(231, 63, 119)',
        padding: '10px',
        borderRadius: '2rem',
        color: '#111',
        transition: 'transform 0.3s', 
    
        'i:hover': {
          transform: 'scale(1.1)', 
        },
      },
      
      
    }