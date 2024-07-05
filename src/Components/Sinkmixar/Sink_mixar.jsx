import React from 'react'
import './Sinkmixar.css'
import data_product from '../Assets/Sinkmixer/sinkmixar'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import cpfusionmain from '../Assets/bacground/sinkmixar.jpg'

const Sink_mixar = () => {
  return (
    <div className='sinkmixern'>
    <img src={cpfusionmain} alt=""  />
    <div className='sinkmixar-text'>
    <h1>sink mixar</h1>
    </div>
    <div className='sinkmixerm'>
      <div className='sinkmixar-main-right'>
        <h1>sink mixar</h1>
        <p>1.	Luxurious  </p><br /><br />
        <p>2.	Unique design </p><br /><br />
        <p>3.	Multi flow adjustable</p><br /><br />
        <p>4.	Aerated sprays and flow restrictors </p><br /><br />
        <p>5.	sinkmixar Accessories</p><br /><br />
        <p>6.	Quality Assurance</p><br /><br />
        
      </div>
<div className='sinkmixar-main-left'>
<div className='sinkmixar-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Sink_mixar
