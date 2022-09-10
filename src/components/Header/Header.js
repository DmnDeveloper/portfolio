import React from 'react'
import BtnIconFooter from '../Buttons/BtnIconFooter'
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc'
import { GrLinkedinOption } from 'react-icons/gr'
import MenuNav from './MenuNav'
import './Header.scss'

const LogoWrapper = () => {
  return (
    <div className='logo-class' >
      <h1 className='text-logo'>
        <AiOutlineLeft size='25px' />MyPortfolio<AiOutlineRight size='25px'/>
      </h1>
    </div>
  )
}

const Header = () => {
  return (
    <header className='header-class'>
      <div className='wrapper-logo'>
       <LogoWrapper />
      </div>

      <div className='wrapper-menu'>
       <MenuNav /> 
      </div>   
      
      <div className='wrapper-icons'>
        <BtnIconFooter link={'https://www.linkedin.com/in/jesús-damián-martín-dávalos-578b761b9'} icon={<GrLinkedinOption size='35px' color='#fff'/>}></BtnIconFooter>
        <BtnIconFooter link={'https://github.com/DmnDeveloper'} icon={<VscGithub size='35px' color='#fff'/>}></BtnIconFooter>
      </div>  
    </header>
  )
}

export default Header