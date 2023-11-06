import React, {  useState } from 'react'

import '../steelheets/NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Logo from './assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'
import { BiMenuAltRight, BiSolidShoppingBag } from 'react-icons/bi'
import { BiX } from 'react-icons/bi'
import FormList from '../Form/FormList'
import { BiUserCircle } from 'react-icons/bi'
import Cart from '../Cart/Cart'



const NavBar = ({ email, setEmail, nombre, setNombre, phone, setPhone }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [name, setName] = useState('');
  

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'
  };
 
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
      {isMenuOpen ? <li onClick={closeMenu}><a onClick={openModal}>Sign Up</a></li> : ''}
      {isMenuOpen ? <i className={`img-cart ${isMenuOpen ? 'open' : ''}`}><BiSolidShoppingBag/></i> : ''}
      </ul>
      {formSubmitted ? <p className='nombre'>Hi !{name}</p> : ''}


      <div className='Sign-Up'>
      <ul >
        <li>{formSubmitted ?
        <>
         <li><i className='user-form'><BiUserCircle/></i>
        <div className='dropdown'>
          <a className='sign-out' onClick={() => setFormSubmitted(false)}>Sign Out</a>
          <a >Your Orders</a>
        </div>
        </li> 
        </>
        :
        <a  onClick={openModal}> Sign Up </a>}
        </li>
        
      </ul>

      <Cart />
      <i className={`img-menu ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>{!isMenuOpen ? <BiMenuAltRight/> : <BiX/>}</i>
      </div>
      <FormList isOpen={isModalOpen} onClose={closeModal} setFormSubmitted={setFormSubmitted} formSubmitted={formSubmitted}  updateName={setName}  email={email} setEmail={setEmail} nombre={nombre} setNombre={setNombre} phone={phone} setPhone={setPhone}/>
       
      
    </nav>
    
    
    </>
  )
}

export default NavBar
