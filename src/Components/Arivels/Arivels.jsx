import React from 'react'
import './Arivels.css'
import arivel1 from '../Assets/arivel-new.jpeg'
import arivel2 from '../Assets/arivel-new1.jpeg'
import arivel3 from '../Assets/arivel-new2.jpeg'
import arivel4 from '../Assets/arivel-new3.jpeg'

const Arivels = () => {
  return (
    <div className='arivels-main'>
      <p>Latest Arivels</p>
      <div className='arivels'>
        <div className='arivel'>
            <img src={arivel1} alt="" />
        </div>

        <div className='arivel'>
            <img src={arivel2} alt="" />
        </div>
        <div className='arivel'>
            <img src={arivel3} alt="" />
        </div>
        <div className='arivel'>
            <img src={arivel4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Arivels
