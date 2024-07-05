import React from 'react'
import './Value.css'
import Slider from "react-slick";


const Value = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    
    <div className='vailu'>
      
      <b>Value</b>
      <h3>At Extro, we uphold the following core values</h3>
          <Slider {...settings} className='values'>
      <div>
        <p>Quality Craftsmanship: We are dedicated to produce faucets of the highest quality, meticulously crafted with precision engineering and attention to detail</p>
      </div>
      <div>
        <p>Innovation: We continually push the boundaries of innovation to develop cutting-edge faucet designs and technologies that enhance functionality, efficiency, and user experience.</p>
      </div>
      <div>
        <p>Sustainability: We are committed to environmentally responsible manufacturing practices, sourcing materials ethically, minimizing waste, and reducing our carbon footprint.</p>
      </div>
      <div>
      <p>Customer Satisfaction: We prioritize customer satisfaction by providing exceptional products and services, listening to feedback, and striving to exceed expectations in every interaction.</p>
      </div>
      <div>
        <p>	Integrity: We conduct our business with honesty, transparency, and integrity, fostering trust and respect among our employees, customers, and partners.</p>
      </div>
      <div>
        <p>	Collaboration: We believe in the power of collaboration and teamwork, fostering a culture of inclusivity, respect, and open communication to drive innovation and success.</p>
      </div>
      <div>
        <p>	Continuous Improvement: We are dedicated to continuous improvement, embracing change, learning from challenges, and striving for excellence in all aspects of our operations.</p>
      </div>
    </Slider>
    <div className='valuess'>
      <p>By upholding these values, we aim to be a trusted leader in the faucet manufacturing industry, delivering superior products that enrich the lives of our customers while contributing positively to the environment and society."</p>
    </div>
    
    
    </div>
  
  )
}

export default Value
