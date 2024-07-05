import React from 'react'
import './Vission.css'
import vision from "../Assets/showerlogo.jpeg"
const Vission = () => {
  return (
        <div className="row">
          <div className="vission-1">
           <img src={vision} alt="" className='vission-img'/>
          </div>
          <div className="vission-2">
            <b>Our Vision</b>
            <h3> Enhance Everyday Experience </h3>
          
          <p>
          Our vision is to redefine modern living through innovative, sustainable, and stylish faucet solutions. We aim to be the leading choice for consumers seeking superior quality, design excellence, and environmental responsibility in every drop."
          </p>
          </div>
        
        </div>
  )
}

export default Vission
