import React from 'react'
import './Cp_fusion.css'
import data_product from '../Assets/CPFusion/Cpfusion.js'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import cpfusionmain from '../Assets/bacground/cp-tarbo-bg.jpg'

const Cp_fusion = () => {
  return (
    <div className='cpfusionn'>
        <img src={cpfusionmain} alt=""  />
        <div className='cpfusion-text'>
        <h1>CP FUSION</h1>
        </div>
        <div className='cpfusionm'>
          <div className='cpfusion-main-right'>
            <h1>CP Faucets</h1>
            <p>1.	Qualified brass   </p><br /><br />
            <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
            <p>3.	Qualified spindle</p><br /><br />
            <p>4.	Multi layer aerator </p><br /><br />
            <p>5.	Uniform thickness</p><br /><br />
            <p>6.	7 year warranty</p><br /><br />
            
          </div>
    <div className='cpfusion-main-left'>
    <div className='cpfusion-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Cp_fusion


