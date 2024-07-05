import React from 'react'
import './Footer.css'
import logos from '../Assets/extro.png'
import whatshap from '../Assets/whatsapp_4423697.png'
import facebook from '../Assets/facebook.png'
import instra from '../Assets/instagram_174855.png'
import twiter from '../Assets/twitter2.png'


const Footer = () => {
  return (
    <div className='footer-main'>
        <div className="footer">
  <div className="col">
    <img src={logos} alt="" className='logoss' />
    <p>Extro offers a selection of high-quality bathroom fittings that includes elegant faucets and rainfall showerheads. Embedded with a touch of luxury and durability we enhance the experience</p>
  </div>
  <div className="col">
  <h3>Office</h3>
  <p>Head office: C-56/5,<br /> 2nd Floor, Mantec Tower, Noida, Sector-62,<br /> UP-201309
<br />Regional offices: </p><br />
  <p>	Argora Chawk,<br /> Ranchi, Jharkhand </p><br />
  <p>	Bairiya Chawk, Muzaffarpur, Bihar</p><br />
  <p className='email-id'>contact@extro.co.in</p>
  <p>+91-9310793393</p>
  </div>
  <div className="col">
    <h3>Link</h3>
    <ul>
        <li>Home</li>
        <li>About</li>
        <li>Sarvices</li>
        <li>Enqurary</li>
    </ul>
  </div>
  <div className="col">
    <h3>Socail Media</h3>
    <div className='media'>
 <a href=" https://wa.me/919310793393?=Hello How can i help you ?"> <img src={whatshap} alt=""  /></a>
<img src={facebook} alt="" />
<img src={twiter} alt="" />
<a href="https://www.instagram.com/harinamextro/"><img src={instra} alt="" /></a>
    </div>
  </div>
  </div>
  <hr />
  <p className='copy-right'> Extro © 2016-All Right Receved </p>
   </div>
  )
}

export default Footer
