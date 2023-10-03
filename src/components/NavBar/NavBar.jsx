import React from 'react'

import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
const NavBar = () => {

  const location = useLocation();

  // Define los estilos de la barra de navegación según la ubicación actual
  const navbarStyles = {
    background: location.pathname === '/' ? 'linear-gradient(90deg, rgba(177,181,181,1) 0%, rgba(108,108,115,1) 35%, rgba(20,20,22,1) 100%)' : '',
    backgroundSize: location.pathname === '/' ? '200% 400%': '',
  };
  return (
    <>
    <nav className='navbar' style={navbarStyles} >
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
