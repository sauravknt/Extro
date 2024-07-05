import React from 'react'
import './Ppstone.css'
import data_product from '../Assets/PPStone/Ppstone'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import stonemain from '../Assets/bacground/pp-stone-bg.jpg'

const Pp_stone = () => {
  return (
    <div className='stonen'>
        <img src={stonemain} alt=""  />
        <div className='stone-text'>
        <h1>PP STONE</h1>
        </div>
        <div className='stonem'>
          <div className='stone-main-right'>
            <h1>PP Faucets</h1>
            <p>1.	Cost effective  </p><br /><br />
            <p>2.	Leakage free tested</p><br /><br />
            <p>3.	Light weight</p><br /><br />
            <p>4.	Authentic PP material </p><br /><br />
            <p>5. Streamline parting</p><br /><br />
            <p>6.	1 year warranty</p><br /><br />
            
          </div>
    <div className='stone-main-left'>
    <div className='stone-item' >
          {data_product.map((item,i)=>{
              return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
          })}
      </div>
  </div>
  </div>
  </div>
  )
}

export default Pp_stone


