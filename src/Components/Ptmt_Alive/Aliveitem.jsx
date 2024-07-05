import React from 'react'
import './Aliveitem.css'
const Aliveitem = (props) => {
  return (
    <div className='aliveitem'>
      <img src={props.image} alt="" />
        <p>{props.name}</p>
        {/*<div className="item-prices">
            <div className="item-price-new">
                   {props.new_price}
            </div>
            <div className="item-price-old">
                   {props.old_price}
            </div>
  </div>*/}
    </div>
  )
}

export default Aliveitem
