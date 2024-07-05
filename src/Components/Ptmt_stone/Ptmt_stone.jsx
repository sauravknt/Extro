import React from 'react'
import './Ptmt_stone.css'
import data_product from '../Assets/PTMTStone/PTMTstone.js'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import fusionmain from '../Assets/bacground/PTMT-stone-bg.jpg'

const Ptmt_stone = () => {
  return (
    <div className='ptmtstonen'>
        <img src={fusionmain} alt=""  />
        <div className='ptmtstone-text'>
        <h1>PTMT STONE</h1>
        </div>
        <div className='ptmtstonem'>
          <div className='ptmtstone-main-right'>
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
    <div className='ptmtstone-main-left'>
    <div className='ptmtstone-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Ptmt_stone
