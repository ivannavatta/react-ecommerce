import React from 'react'

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './assets/logo.svg'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
    <nav className='navbar'>
      <img src={Logo} alt="" className='logo'/>
      <ul className='flex-ul nav-links'>
      <li><Link to={'/'}>Home</Link> </li>
      <li><Link to={'/products'}>Products</Link> </li>
      <li><Link to={'/aboutus'}>AboutUs</Link> </li>
      </ul>
      <div className='Sign-Up'>
      <ul>
        <li><a href="">Sign Up</a></li>
      </ul>

      <CartWidget/>
      </div>
       
      
    </nav>
    
    
    </>
  )
}

export default NavBar
