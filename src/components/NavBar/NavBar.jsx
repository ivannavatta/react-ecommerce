import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
const NavBar = () => {
  return (
    <>
    <nav className=''>
      <ul className='flex-ul'>
       
      <a href=""><li>Home</li></a> 
        <a href=""><li>Products</li></a> 
       <a href=""><li>About Us</li></a> 
        <CartWidget/>

      </ul>
    </nav>
    
    
    </>
  )
}

export default NavBar
