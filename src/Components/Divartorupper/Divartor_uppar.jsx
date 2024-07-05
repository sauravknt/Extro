import React from 'react'
import './Divartor.css'
import data_product from '../Assets/divertor/divartor'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import cpfusionmain from '../Assets/bacground/upperBanner.jpg'

const Divartor_uppar = () => {
  return (
    <div className='divartorupn'>
    <img src={cpfusionmain} alt=""  />
    <div className='divartorup-text'>
    <h1>DIVERTOR UPPER PART</h1>
    </div>
    <div className='divartorupm'>
      <div className='divartorup-main-right'>
        <h1>DIVERTOR UPPER PART</h1>
        <p>1.	Luxurious  </p><br /><br />
        <p>2.	Unique design </p><br /><br />
        <p>3.	Multi flow adjustable</p><br /><br />
        <p>4.	Aerated sprays and flow restrictors </p><br /><br />
        <p>5.	divartorup Accessories</p><br /><br />
        <p>6.	Quality Assurance</p><br /><br />
        
      </div>
<div className='divartorup-main-left'>
<div className='divartorup-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Divartor_uppar
