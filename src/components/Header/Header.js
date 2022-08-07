import React from 'react'
import './Header.scss'
import LogoWrapper from './LogoWrapper'
import MenuNav from './MenuNav'

const Header = () => {
  return (
    <header className='header-class'>
      <div className='wrapper-logo'>
       <LogoWrapper />
      </div>
      <div className='wrapper-menu'>
       <MenuNav /> 
      </div>    
    </header>
  )
}

export default Header