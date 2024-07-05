import React, { useEffect,useState} from 'react'
import './Navbar.css'
import logo from '../Assets/extro.png'
import menuicon from '../Assets/menu-icon.png'
import cpchoco from '../Assets/bacground/cpchoco.jpeg'
import cpturbo from '../Assets/bacground/cpturbo.jpeg'
import cpmatrix from '../Assets/bacground/matrixbg2.jpg'
import cpkia from '../Assets/bacground/Kiabg.jpg'
import cpfusion from '../Assets/bacground/cpfusion.jpeg'
import cpvignet from '../Assets/bacground/cpvignet.jpeg'
import ptmtstone from '../Assets/bacground/ptmtstone.jpeg'
import ptmtfusion from '../Assets/bacground/ptmtfusion.jpeg'
import ptmtstone1 from '../Assets/bacground/PTMTStone1.png'
import ppstone from '../Assets/bacground/ppstone.jpeg'
import ppfusion from '../Assets/bacground/ppfusion.jpeg'
import pproyal from '../Assets/bacground/pproyal.jpeg'
import shower from '../Assets/showerlogo.jpeg'
import divartor from '../Assets/bacground/upperBanner1.jpg'
import sinkmixar from '../Assets/bacground/sinkmixar.jpeg'

import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
//sticky//
  const[sticky, setSticky]= useState(false) ;

useEffect(()=>{
  window.addEventListener('scroll',()=>{
    window.scrollY >100 ? setSticky(true): setSticky(false);
  })
},[]);
//toggalmanu//
const[mobileMenu,setMobileMenu]=useState(false);
const toggleMenu = ()=>{
mobileMenu ? setMobileMenu(false) :setMobileMenu (true);
}

  return (
    <nav className={`container ${sticky? 'dark-nav':''}`} >
     
        <img src={logo} alt="" className='logo' />
       
      <img  src={menuicon} alt="" className='menu-icon' onClick={toggleMenu} />
      <ul className={mobileMenu?'':'hide-mobile-menu'} >
        <li >  <Link style={{textDecoration:'none'}} to='/'>Home</Link></li>  
        <li>  <Link style={{textDecoration:'none'}} to='/Home'>About</Link></li> 
      {/*mega menu*/}
      <li>  <Link style={{textDecoration:'none'}} >CP Faucets</Link>
      <ul>
        <li> <Link style={{textDecoration:'none'}} to='/Cpchoco'><img src={cpchoco} alt="" className='navimg'/>Choco</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Cpmatrix'><img src={cpmatrix} alt="" className='navimg'/>Matrix</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Cpturbo'><img src={cpturbo} alt="" className='navimg' />Turbo</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Cpkia'><img src={cpkia} alt="" className='navimg'/>Kia</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Cpfusion'><img src={cpfusion} alt="" className='navimg'/>Fusion</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Cpvignet'><img src={cpvignet} alt="" className='navimg'/>Vignet</Link></li>
      </ul>
      </li> 

      <li>  <Link style={{textDecoration:'none'}} >PTMT Faucets</Link>
      <ul>
        <li> <Link style={{textDecoration:'none'}} to='/Ptmtalive'><img src={ptmtstone} alt="" className='navimg'/>Alive</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Ptmtfusion'><img src={ptmtfusion} alt="" className='navimg'/>Fusion</Link></li>
        <li> <Link style={{textDecoration:'none'}} to='/Ptmtstone'><img src={ptmtstone1} alt="" className='navimg'/>Stone</Link></li>
      </ul>
      </li> 

      <li>  <Link style={{textDecoration:'none'}} >PP Faucets</Link>
      <ul>
        <li><Link style={{textDecoration:'none'}} to='/Ppstone'><img src={ppstone} alt="" className='navimg'/>Stone</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/Ppfusion'><img src={ppfusion} alt="" className='navimg'/>Fusion</Link></li>
        <li><Link style={{textDecoration:'none'}} to='/Pproyal'><img src={pproyal} alt="" className='navimg'/>Royal</Link></li>
      </ul>
      </li>

      <li>  <Link style={{textDecoration:'none'}} >Allied</Link>
      <ul>
        <li><li><Link style={{textDecoration:'none'}} to='/Shower'><img src={shower} alt="" className='navimg'/>Shower</Link></li></li>
        <li><li><Link style={{textDecoration:'none'}} to='/Divartorupper'><img src={divartor} alt="" className='navimg'/>Divertor Upper Part</Link></li></li>
        <li><li><Link style={{textDecoration:'none'}} to='/Sinkmixar'><img src={sinkmixar} alt="" className='navimg'/>Sink Mixer</Link></li></li>
      </ul>
      </li>

        <li ><Link style={{textDecoration:'none'}} to='/Enquiry'>Enquiry</Link></li>
        
      </ul>
     
      
    </nav>
  )
}

export default Navbar
