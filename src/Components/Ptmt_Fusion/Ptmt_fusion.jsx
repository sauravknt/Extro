import React from 'react'
import './Ptmt_fusion.css'
import data_product from '../Assets/PTMTFusion/Ptmtfusion'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import fusionmain from '../Assets/bacground/pp-stone-bg.jpg'

const Ptmt_fusion = () => {
  return (
    <div className='fusionmainn'>
        <img src={fusionmain} alt=""  />
        <div className='fusion-text'>
        <h1>PTMT FUSION</h1>
        </div>
        <div className='fusionm'>
          <div className='fusion-main-right'>
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
    <div className='fusion-main-left'>
    <div className='fusion-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Ptmt_fusion
