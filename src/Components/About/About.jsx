import React from 'react'
import './About.css'
import herobg1 from '../Assets/bacground/about-mainn.jpg'

const About = () => {
  return (
    <div className='about-bg'>
     <img src={herobg1} alt=""  />
    {/* <h1>ABOUT US</h1>*/}
    <div className="about1">
    <div className="about">
          <b>ABOUT US</b>
          <h3>(Welcome to EXTRO!)</h3>
          <p>Here innovation meets durability. <br /><br />
          We are a leading provider of premium faucets, committed to deliver exceptional quality and design to enhance every kitchen and bathroom experience.
         <br /> <br />With a passion for craftsmanship and a dedication to excellence, we have been at the catering to the industry for a decade. Our journey began with a vision to revolutionize the experience of interaction with water, and today, we stand proud among the pioneers in faucet manufacturing.
          <br /><br />At EXTRO, we believe that a faucet is more than just a functional fixture; it's a statement of style and sophistication. That's why each of our products is meticulously crafted using the finest materials and advanced technology, ensuring unparalleled performance and durability.
          <br /><br />Our extensive range of faucets caters to every taste and requirement, from sleek modern designs to timeless classics. Whether you're renovating your home or undertaking a commercial project, you can trust EXTRO to provide the perfect solution for your needs.
          <br /><br />Our commitment extends beyond superior products. We are dedicated to customer satisfaction, striving to exceed expectations at every turn. From our attentive customer service to our seamless ordering process, we aim to make your experience with us as effortless as possible.
         <br /> <br />As we look towards future, we remain steadfast in our pursuit of innovation and sustainability. We continuously explore new ideas and technologies to improve our products and minimize our environmental footprint, ensuring a brighter tomorrow for generations to come.
         <br /> <br />Thank you for choosing EXTRO, Join us in redefining the art of faucet design and discover the difference that quality makes.
</p>
          </div>  
    </div>
    </div>
  )
}

export default About
