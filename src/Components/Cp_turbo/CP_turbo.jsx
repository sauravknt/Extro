import React from 'react'
import './Cp_turbo.css'
import data_product from '../Assets/CpTurbo/turbo'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import turbomain from '../Assets/bacground/Turbobg1.png'

const Cp_turbo = () => {
  return (
    <div className='turbo'>
        <img src={turbomain} alt=""  />
        <div className='tuebo-text'>
        <h1>CP TURBO</h1>
        </div>
        <div className='turbom'>
          <div className='tuebo-main-right'>
            <h1>CP Faucets</h1>
            <p>1.	Qualified brass   </p><br /><br />
            <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
            <p>3.	Qualified spindle</p><br /><br />
            <p>4.	Multi layer aerator </p><br /><br />
            <p>5.	Uniform thickness</p><br /><br />
            <p>6.	7 year warranty</p><br /><br />
            
          </div>
    <div className='tuebo-main-left'>
    <div className='tuebo-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cp_turbo


