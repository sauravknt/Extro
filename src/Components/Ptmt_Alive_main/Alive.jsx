import React from 'react'
import './Alive.css'
import data_product from '../Assets/PTMTAlive/alive'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import alivemain from '../Assets/bacground/ptmt-alive-bg.jpg'

const Alive = () => {
  return (
    <div className='alivemainn'>
        <img src={alivemain} alt=""  />
        <div className='alive-text'>
        <h1>PTMT ALIVE</h1>
        </div>
        <div className='alivem'>
          <div className='alive-main-right'>
            <h1>PTMT Faucets</h1>
            <p>1.	ISI certified Products </p><br /><br />
            <p>2.	SS 304 road inserted to provide durability</p><br /><br />
            <p>3.	Heat Insulated and resistant to high temperatures, UV radiation,<br /> and are non-corrosive</p><br /><br />
            <p>4.	Streamline parting</p><br /><br />
            <p>5.	Sustainable & Authentic Raw Materials</p><br /><br />
            <p>6.	Leakage free tested</p><br /><br />
            <p>7.	3 year warranty
              
</p>
          </div>
    <div className='alive-main-left'>
    <div className='alive-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Alive
