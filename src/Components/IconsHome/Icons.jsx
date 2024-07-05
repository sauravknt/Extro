import React from 'react'
import './Icons.css'
import data_product from '../Assets/icons'
import Item from '../IconsItem/Icons_item'
const Icons = () => {
  return (
    <div className='icons-main'>
      <div className='icon-item' >
            {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}  />
            })}
        </div>
    </div>
  )
}

export default Icons
