import React from 'react'
import BtnIconFooter from '../Buttons/BtnIconFooter'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { VscGithub } from 'react-icons/vsc'
import { GrLinkedinOption } from 'react-icons/gr'
import { Modal } from '../ModalsPortafolio/Modal'
import { useModal } from '../../hooks/useModal'
import MenuNav from './MenuNav'
import './Header.scss'

const LogoWrapper = () => {
  return (
    <div className='logo-class'>
      <h1 className='text-logo'>
        <AiOutlineLeft size='25px' />MyPortfolio<AiOutlineRight size='25px'/>
      </h1>
    </div>
  )
}

const Header = () => {
  const [isOpen, openModal, closeModal] = useModal(false)
  return (
    <header className='header-class'>
      <div className='wrapper-logo'>
       <LogoWrapper />
      </div>
      <div className='wrapper-menu'>
       <MenuNav /> 
      </div>   
      <div className='wrapper-icons'>
        <BtnIconFooter myClick={openModal} icon={<GrLinkedinOption size='35px' color='#fff'/>}></BtnIconFooter>
        <Modal isOpen={isOpen} closeModal={closeModal}></Modal> 

        <BtnIconFooter myClick={openModal} icon={<VscGithub size='35px' color='#fff'/>}></BtnIconFooter>
        <Modal isOpen={isOpen} closeModal={closeModal}></Modal>  
      </div>  
    </header>
  )
}

export default Header