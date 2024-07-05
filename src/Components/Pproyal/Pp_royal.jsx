import React from 'react'
import './Pp_royal.css'
import data_product from '../Assets/PPRoyal/Pproyal'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import fusionmain from '../Assets/bacground/pp-royle-bg.jpg'

const Pp_royal = () => {
  return (
    <div className='royaln'>
        <img src={fusionmain} alt=""  />
        <div className='roual-text'>
        <h1>PP ROYAL</h1>
        </div>
        <div className='royalm'>
          <div className='roual-main-right'>
            <h1>PP Faucets</h1>
            <p>1.	Cost effective  </p><br /><br />
            <p>2.	Leakage free tested</p><br /><br />
            <p>3.	Light weight</p><br /><br />
            <p>4.	Authentic PP material </p><br /><br />
            <p>5. Streamline parting</p><br /><br />
            <p>6.	1 year warranty</p><br /><br />
            
          </div>
    <div className='roual-main-left'>
    <div className='roual-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Pp_royal




