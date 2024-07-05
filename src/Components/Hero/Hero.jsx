import React from 'react'
import './Hero.css'
//import dark_arro from '../Assets/dark-arrow.png'
import background from '../Assets/background1.jpg'
import background1 from '../Assets/background5.jpg'
import background2 from '../Assets/background6.jpg'
import background3 from '../Assets/background8.jpg'
const Hero = () => {
  return (
    <div>
    <div className='banner1'>
      <img src={background} alt="" className='img-main' />
       <div className='text-box'>
        <h1>EXTRO  Ensures a complete range of luxuries Bathroom fitting Solutions</h1>
        <span></span>
        <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience.
By offering a comprehensive range of bathroom solutions, we aim to create beautiful, functional, and personalized spaces that exceed our clients' expectations.

</p>
       </div>
    </div> 

    <div className='banner2'>
      <img src={background1} alt="" className='img-main' />
       <div className='text-box'>
        <h1>EXTRO  Ensures a complete range of luxuries Bathroom fitting Solutions</h1>
        <span></span>
        <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience.
By offering a comprehensive range of bathroom solutions, we aim to create beautiful, functional, and personalized spaces that exceed our clients' expectations.

</p>
       </div>
    </div> 

    <div className='banner3'>
      <img src={background2} alt="" className='img-main'/>
       <div className='text-box'>
        <h1>EXTRO  Ensures a complete range of luxuries Bathroom fitting Solutions</h1>
        <span></span>
        <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience.
By offering a comprehensive range of bathroom solutions, we aim to create beautiful, functional, and personalized spaces that exceed our clients' expectations.

</p>
       </div>
    </div> 
    <div className='banner4'>
      <img src={background3} alt="" className='img-main' />
       <div className='text-box'>
        <h1>EXTRO  ensuresa Complete range of luxuries bathroom fitting solutions</h1>
        <span></span>
        <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience.
By offering a comprehensive range of bathroom solutions, we aim to create beautiful, functional, and personalized spaces that exceed our clients' expectations.

</p>
       </div>
    </div> 
    </div>   
  )

}

export default Hero
