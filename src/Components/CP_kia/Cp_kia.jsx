import React from 'react'
import './Cpkia.css'
import data_product from '../Assets/CPKia/Kia.js'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import kiamain from '../Assets/bacground/cp-kia-bg.jpg'

const Cp_kia = () => {
  return (
    <div className='kian'>
        <img src={kiamain} alt=""  />
        <div className='kia-text'>
        <h1>CP KIA</h1>
        </div>
        <div className='kiam'>
          <div className='kia-main-right'>
            <h1>CP Faucets</h1>
            <p>1.	Qualified brass   </p><br /><br />
            <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
            <p>3.	Qualified spindle</p><br /><br />
            <p>4.	Multi layer aerator </p><br /><br />
            <p>5.	Uniform thickness</p><br /><br />
            <p>6.	7 year warranty</p><br /><br />
            
          </div>
    <div className='kia-main-left'>
    <div className='kia-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cp_kia


