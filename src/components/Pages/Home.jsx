import React from 'react'
import FirstSection from '../Section/FirstSection'
import SecondSection from '../Section/SecondSection'
import ThreeSection from '../Section/ThreeSection'
import FourSection from '../Section/FourSection'
import { BiUpArrowAlt } from "react-icons/bi";


const Home = () => {
  return (
    <>
    
<FirstSection/>
<SecondSection/>
<ThreeSection/>
<FourSection/>
<a href="#" className='arrow-home' style={styles.arrow}><i style={styles.i}><BiUpArrowAlt/></i></a>
    </>
    
  )
}

export default Home

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
