import React from 'react'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import './LogoWrapper.scss'

const LogoWrapper = () => {
  return (
    <div className='logo-class'>
      <h1 className='text-logo'>
        <AiOutlineLeft size='25px' />MyPortfolio<AiOutlineRight size='25px'/>
      </h1>
    </div>
  )
}

export default LogoWrapper