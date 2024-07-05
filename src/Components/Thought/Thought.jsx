import React from 'react'
import './Thought.css'
import Slider from "react-slick";

const Thought = () => {
    var settings = {
        dots: true,
        infinite: true ,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll:1,
      };
  return (
    
    <div className='thought-main'>
        <h4>Why Choose EXTRO</h4>
        <Slider {...settings} className='thought'>
    <div>
        <h3>Diverse range of faucet</h3>
      <p>Discover a world of possibilities with our diverse range of faucet collections. Whether you're seeking a sleek and contemporary look or a more traditional style, we have the perfect faucet to complement your space. Browse through our collections to find the ideal match for your home décor and personal taste.</p>
    </div>
    <div>
        <h3>Quality for durability</h3>
      <p>We at EXTRO understand trust and demands by product of quality and thus we ensure each faucet in our collection is a testament to quality craftsmanship. We source the finest materials and utilize advanced manufacturing techniques to ensure durability, reliability, and long-lasting beauty. Our faucets are engineered to withstand the rigors of daily use while maintaining their stunning appearance for years to come.</p>
    </div>
    <div>
        <h3>Innovative Technology</h3>
      <p>Experience the convenience of cutting-edge technology with our innovative faucet features. We're constantly pushing the boundaries of what's possible to enhance your everyday life. Our commitment to innovation means you can trust that your EXTRO faucet is equipped with the latest advancements for superior performance.</p>
    </div>
    <div>
        <h3>Environmentally Conscious Design</h3>
    <p>At EXTRO we understand the importance of sustainability. That's why we strive to incorporate eco-friendly practices into our design and manufacturing processes. Our faucets help conserve water without compromising performance, allowing you to reduce your environmental footprint without sacrificing quality or style.</p>
    </div>
    <div>
        <h3>Exceptional Customer Service</h3>
      <p>Your satisfaction is our top priority. Whether you have questions about our products, need assistance with installation, or require support after purchase, our dedicated customer service team is here to help. We're committed to providing exceptional service at every step of your journey with EXTRO</p>
    </div>
    <div>
        <h3>Shop with Confidence</h3>
      <p>Shop with confidence knowing that you're investing in a EXTRO faucet – a symbol of quality, style, and innovation. Extro also ensures unmatched warranty and services.
Transform your space with EXTRO faucets today. Welcome home to elegance, performance, and lasting beauty.
</p>
    </div>
  </Slider>
  
  </div>

  )
}

export default Thought
