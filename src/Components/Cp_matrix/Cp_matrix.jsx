import React from 'react'
import './Cp_matrix.css'
import data_product from '../Assets/CpMatrix/Matrix.js'
import Aliveitem from '../Ptmt_Alive/Aliveitem'
import cpfusionmain from '../Assets/bacground/matrixbg1.jpg'
const Cp_matrix = () => {
  return (
    <div className='cpmatrixn'>
    <img src={cpfusionmain} alt=""  />
    <div className='cpmatrix-text'>
    <h1>CP  Matrix</h1>
    </div>
    <div className='cpmatrixm'>
      <div className='cpmatrix-main-right'>
        <h1>CP Matrix</h1>
        <p>1.	Qualified brass   </p><br /><br />
        <p>2.	Chrome plating done to ensure mirrir </p><br /><br />
        <p>3.	Qualified spindle</p><br /><br />
        <p>4.	Multi layer aerator </p><br /><br />
        <p>5.	Uniform thickness</p><br /><br />
        <p>6.	7 year warranty</p><br /><br />
        
      </div>
<div className='cpmatrix-main-left'>
<div className='cpmatrix-item' >
      {data_product.map((item,i)=>{
          return <Aliveitem key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
      })}
  </div>
</div>
</div>
</div>
  )
}

export default Cp_matrix
