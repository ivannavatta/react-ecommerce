import React from 'react'
import FirstSection from '../FirstSection/FirstSection'
import ItemListContainer from '../ItemListConainer/ItemListContainer'
import ItemCount from '../ItemCount/ItemCount'
import smartWach from '../img/zyro-image.png'

const Home = () => {
  return (
    <>
    <div className="slide">
        <div className="text-container">
  <h2>"Elegance is found in every wrists embrace."</h2>
  </div>
    </div>
    <img src={smartWach}  className="smart-watch"/>
<FirstSection/>

    </>
    
  )
}

export default Home