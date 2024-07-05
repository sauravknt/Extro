import React from 'react'
import './Cp_vignet.css'
import data_product from '../Assets/CpVignet/Vignet.js'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import vignetmain from '../Assets/bacground/cp-vignet-bg.jpg'

const Cp_vignet = () => {
  return (
    <div className='vignetn'>
        <img src={vignetmain} alt=""  />
        <div className='vignet-text'>
        <h1>CP VIGNET</h1>
        </div>
        <div className='vignetm'>
          <div className='vignet-main-right'>
            <h1>CP Faucets</h1>
            <p>1.	Qualified brass   </p><br /><br />
            <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
            <p>3.	Qualified spindle</p><br /><br />
            <p>4.	Multi layer aerator </p><br /><br />
            <p>5.	Uniform thickness</p><br /><br />
            <p>6.	7 year warranty</p><br /><br />
            
          </div>
    <div className='vignet-main-left'>
    <div className='vignet-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cp_vignet


