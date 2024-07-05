import React from 'react'
import './Misson.css'
import vision from "../Assets/misson.jpeg"

const Mission = () => {
  return (
        <div className="misson">
          <div className="misson-1">
          <b>Our Mission</b>
            
          <p>
          At our faucet manufacturing company, our mission is to redefine the essence of quality and innovation in every drop. We are committed to crafting exceptional faucets that seamlessly blend functionality, durability, and style. Through relentless dedication to precision engineering, sustainable practices, and customer-centricity, we aim to enrich the daily lives of our users while inspiring admiration for the craftsmanship behind each product. With a focus on innovation and excellence, we strive to set new standards of excellence in the industry and leave a lasting impact on the world of water fixtures
          </p>
          </div>
          <div className="misson-2">
          <img src={vision} alt="" className='misson-img'/>
            
          </div>
        
        </div>
  )
}

export default Mission
