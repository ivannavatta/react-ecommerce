import React, { useState } from 'react'

import '../steelheets/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { BiMenuAltRight, BiSolidShoppingBag } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menu = document.querySelector('.img-menu')
  const nav = document.querySelector('.nav-links')

  window.onscroll = () => {
    if(isMenuOpen){
      nav.classList.remove('open')
      setIsMenuOpen(!isMenuOpen)
    }
    
  }
 const closeMenu = () => {
  setIsMenuOpen(false)
 }
  return (
    <>
    <nav className='navbar'  >
      <img src='https://fontmeme.com/permalink/231013/b57924108621c64020d2520b92888692.png' alt="" className='logo'/>
      <ul className={`flex-ul nav-links ${isMenuOpen ? 'open' : ''}`}>
      <li><Link to={'/'} onClick={closeMenu}>Home</Link> </li>
      <li><Link to={'/products'} onClick={closeMenu}>Products</Link> </li>
      <li><Link to={'/aboutus'} onClick={closeMenu}>AboutUs</Link> </li>
      {isMenuOpen ? <li onClick={closeMenu}><a href="/">Sign Up</a></li> : ''}
      {isMenuOpen ? <i className={`img-cart ${isMenuOpen ? 'open' : ''}`}><BiSolidShoppingBag/></i> : ''}
      </ul>
      <div className='Sign-Up'>
      <ul >
        <li><a href="/">Sign Up</a></li>
        
      </ul>

      <CartWidget display={isMenuOpen && window.innerWidth >= 820 ? 'block' : 'none'} />
      <i className={`img-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>{!isMenuOpen ? <BiMenuAltRight/> : <BiX/>}</i>
      </div>
       
      
    </nav>
    
    
    </>
  )
}

export default NavBar
