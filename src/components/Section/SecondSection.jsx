import React from 'react'
import '../steelheets/SecondSection.css'
const SecondSection = () => {
  return (
    <section className='container '>
        <div className="container-box">
            <img src='../img/hola.png' />
            <h3>11:00 am - 20:00 pm</h3>
            <a href="">Working Hours</a>
        </div>
        <div className="container-box">
            <img src='../img/hola.png' />
            <h3>Malibu,CA</h3>
            <a href="">Get Direction</a>
        </div>
        <div className="container-box">
            <img src='../img/hola.png' />
            <h3>(333) 444-1745934</h3>
            <a href="">Call US Now</a>
        </div>

    </section>
  )
}

export default SecondSection