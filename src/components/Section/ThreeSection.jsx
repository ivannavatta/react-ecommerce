import React from 'react'
import '../steelheets/ThreeSection.css'
import { BiPlay } from "react-icons/bi";
const ThreeSection = () => {
  return (
    <section className='about ' id='about'>
        <div className="about-img">
            <img src='../img/hola.png' />
        </div>
        <div className="about-text">
            <h2>Savoring Life starts <br /> with savorinh hambuerges </h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis ab itaque quaerat laudantium sequi pariatur vel qui error alias. Quod repellendus sint pariatur delectus dolore blanditiis asperiores veniam. Animi, error!
        </p>
        <a href="#" className='btn'>Explore More<i><BiPlay/></i></a>
        </div>
        <div className="about-img-reponsive">
            <img src='../img/hola.png' />
        </div>

        
    </section>
  )
}

export default ThreeSection