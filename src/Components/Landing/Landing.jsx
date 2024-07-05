import React from 'react'
import './Landing.css'
import vison from '../Assets/tap2.png'
import vison1 from '../Assets/tap1.png'

const Landing = () => {
  return (

        <div className="landing">
          <div className="landing-1">
          <b>Message From Promoter</b>
          <h3>Experience the Artistry of Water with EXTRO</h3>
          <p>At Extro, we believe that every drop of water should be a masterpiece. That's why we pour our passion for precision craftsmanship and innovative design into every faucet we create.
With a commitment to quality and durability, our faucets are more than just fixtures – they're reflections of your unique style and a testament to our dedication to excellence.
Transform your kitchen or bathroom into a sanctuary of elegance and functionality with Extro. Discover the perfect blend of form and function, where every turn of the handle becomes a moment of joy.
Elevate your space with Extro. Explore our collection today and let your imagination flow freely.
</p>
          </div>
          
          <div className='imgl'>
<img src={vison} alt=""   />
<img src={vison1} alt=""  />
</div>
         
        
        </div>

  )
}

export default Landing
