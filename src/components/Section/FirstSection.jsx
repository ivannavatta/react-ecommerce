import React, { useEffect } from 'react'
import '../steelheets/FirstSection.css'
import { BiPlay } from "react-icons/bi";
import { AOS } from 'aos';
import { Link } from 'react-router-dom';


const FirstSection = () => {
   
return (
    <>
   <section className= 'home' id='home'>
    
    <div  className="home-text" >
    <h1 className='text-container ' ><span>"Elegance is found</span> in every wrists embrace."</h1>
    <div className='container-btn'>
        
    <Link className='btn' to={'/products'}>Explore Products <i><BiPlay/></i> </Link>
    
   
    </div>
    </div>
    <div className="home-img">
        <img src='../img/hola.png' alt='smartwatch principal' />
    </div>
    
    </section>
    
    
    </>
)

}


export default FirstSection