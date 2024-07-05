import React from 'react'
import './Cloction.css'
import cloction1 from '../Assets/cloction1.jpeg'
import cloction2 from '../Assets/cloction2.jpeg'
import cloction3 from '../Assets/cloction3.jpeg'
import caption1 from '../Assets/hover-kitchen-sink.png'
import caption2 from '../Assets/hover-tap.png'
import caption3 from '../Assets/hover-shower-head.png'
const Cloction = () => {
  return (
    <div className='clactionp'>
        <p>Imagine Your Perfect <p>Bathroom</p></p>
    <div className='clactions'>
        <div className='claction'>
            <img src={cloction1} alt="" />
            <div className="caption">
                <img src={caption1} alt="" /> 
        
            </div>
        </div>
        <div className='claction'>
            <img src={cloction2} alt="" />
            <div className="caption">
                <img src={caption2} alt="" />
                
            </div>
        </div>
        <div className='claction'>
            <img src={cloction3} alt="" />
            <div className="caption">
                <img src={caption3} alt="" />
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Cloction
