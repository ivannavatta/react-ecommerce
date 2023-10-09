import React from 'react'
import '../steelheets/FirstSection.css'

const FirstSection = () => {
return (
    <>
    <section>
    <div className="slide">
        <div className="text-container">
  <h2>"Elegance is found in every wrists embrace."</h2>
  </div>
    </div>
    
    <img src='../img/zyro-image.png' alt='smartWatch'  className="smart-watch"/>
   
    <div className='center-container'>
    <div className='container'>
    <header className='Header-section1'>
    <h2 className='h2-watch'>The InfinitiWatch</h2>
        <p className='txt'>"The InfinitiWatch is a futuristic smartwatch that combines elegance with cutting-edge technology. With its high-resolution holographic display and intelligent voice assistant, it immerses you in a world of information and connectivity. It tracks your health accurately, offers 5G connectivity, and long-lasting battery life, making it the perfect companion for both work and adventure in this exciting future."</p>
    </header>
        
    <footer className='center-botton'>
    <a href="/" className='button-smart-watch'>
    show more
    </a>
    </footer>
    </div>
    </div>
    
    </section>
    </>
)

}

export default FirstSection