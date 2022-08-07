import React from 'react'
import { NavLink } from 'react-router-dom'
import './MenuNav.scss'


const MenuNav = () => {
  return (
    <div className='menu-wrapper'>
        <div className='wrapper-link'>
            <NavLink className='link' exact='true' to='/'>Sobre Mi</NavLink>
        </div>
        <div className='wrapper-link'>
            <NavLink className='link' exact='true' to='/Portafolio'>Portafolio</NavLink>
        </div>
        <div className='wrapper-link'>
           <NavLink className='link' exact='true' to='/Contact'>Contacto</NavLink>
        </div>
    </div>
  )
}

export default MenuNav