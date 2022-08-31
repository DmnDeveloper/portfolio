import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'


const MenuNav = () => {
  return (
    <div className='menu-wrapper'>
        <NavLink className='link' exact='true' to='/'>
          <div className='wrapper-link'>Sobre Mi</div>
        </NavLink>
        <NavLink className='link' exact='true' to='/Portafolio'>
          <div className='wrapper-link'>Portafolio</div>
        </NavLink>
        <NavLink className='link' exact='true' to='/Contact'>
          <div className='wrapper-link'>Contacto</div>
        </NavLink>
    </div>
  )
}

export default MenuNav