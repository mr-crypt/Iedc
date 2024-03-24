import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import dark from '../../assets/night.png'
import light from '../../assets/sun.svg'
import menu from '../../assets/menu.svg'
import close from '../../assets/close.svg'
function Navbar({theme, setTheme}) {
  const toogle=()=>{
    theme=='light'?setTheme('dark'):setTheme('light');
  }
  const[nav , setNav]= useState('false')
  const navs=()=>{ nav=='true'?setNav('false'):setNav('true');}
  return (
    <>
    <div className='navbar '>
      <img src={logo} alt="logo" className='logo' />
      <ul className={nav=='true'?'ul show':'ul'}>
        <li><a>Home</a></li>
        <li><a>Mission</a></li>
        <li><a>Events</a></li>
        <li><a>About us</a></li>
        <li><a>Contact</a></li>
        <li><a><img onClick={()=>{toogle()}} src={theme=='light'?light:dark} alt="dark" className='toogle_img'  /></a></li>
      </ul>

    <div className='mobile'>
      <img onClick={()=>{navs()}} src={nav=='true'?close:menu} alt="" className='menu' />
      {/* <img src={close} alt="" className='close' /> */}
    </div>
    </div>
    </>
  )
}

export default Navbar