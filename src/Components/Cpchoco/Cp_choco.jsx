import React from 'react'
import './Cpchoco.css'
import data_product from '../Assets/CpChoco/choco'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import chocomain from '../Assets/bacground/cp-choco-bg.jpg'

const Cp_turbo = () => {
  return (
    <div className='chocon'>
        <img src={chocomain} alt=""  />
        <div className='choco-text'>
        <h1>CP CHOCO</h1>
        </div>
        <div className='chocom'>
          <div className='choco-main-right'>
            <h1>CP Faucets</h1>
            <p>1.	Qualified brass   </p><br /><br />
            <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
            <p>3.	Qualified spindle</p><br /><br />
            <p>4.	Multi layer aerator </p><br /><br />
            <p>5.	Uniform thickness</p><br /><br />
            <p>6.	7 year warranty</p><br /><br />
            
          </div>
    <div className='choco-main-left'>
    <div className='choco-item' >
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


