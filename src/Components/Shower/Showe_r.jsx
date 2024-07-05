import React from 'react'
import './Shower.css'
import data_product from '../Assets/Shower/shower'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import cpfusionmain from '../Assets/bacground/showerbg.jpg'

const Showe_r = () => {
  return (
    <div className='showern'>
    <img src={cpfusionmain} alt=""  />
    <div className='shower-text'>
    <h1>SHOWER</h1>
    </div>
    <div className='showerm'>
      <div className='shower-main-right'>
        <h1>SHOWER</h1>
        <p>1.	Luxurious  </p><br /><br />
        <p>2.	Unique design </p><br /><br />
        <p>3.	Multi flow adjustable</p><br /><br />
        <p>4.	Aerated sprays and flow restrictors </p><br /><br />
        <p>5.	Shower Accessories</p><br /><br />
        <p>6.	Quality Assurance</p><br /><br />
        
      </div>
<div className='shower-main-left'>
<div className='shower-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Showe_r
