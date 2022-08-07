import React from 'react'
import { motion } from 'framer-motion'
import { FiGithub } from 'react-icons//fi'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'  
import { FaRegCopyright } from 'react-icons/fa'
import './Footer.scss'

const Footer = () => {
  return (
      <div className='footer'>
        <div className='wrapper-icons'>
          <motion.a 
          className='btn-icon-footer' 
          href='https://github.com/DmnDeveloper' 
          target='_blank' 
          rel="noreferrer"
          whileHover={{ color: '#fff', backgroundColor: '#000' }}
          whileTap={{ scale: 0.8 }}>
            <FiGithub size='30px' className='icon' />
          </motion.a>

          <motion.a 
          className='btn-icon-footer' 
          href='www.linkedin.com/in/jesús-damián-martín-dávalos-578b761b9' 
          target='_blank'
          rel="noreferrer"
          whileHover={{ color: '#fff', backgroundColor: '#000' }}
          whileTap={{ scale: 0.8 }}>
            <FaLinkedinIn size='30px' className='icon' />
          </motion.a >

          <motion.a  
          className='btn-icon-footer' 
          href='https://github.com/DmnDeveloper' 
          target='_blank'
          rel="noreferrer"
          whileHover={{ color: '#fff', backgroundColor: '#000' }}
          whileTap={{ scale: 0.8 }}>
            <FaWhatsapp size='30px' className='icon' />
          </motion.a >

          <motion.a  
          className='btn-icon-footer' 
          href='https://www.instagram.com/damianswout/' 
          target='_blank' 
          rel="noreferrer"
          whileHover={{ color: '#fff', backgroundColor: '#000' }}
          whileTap={{ scale: 0.8 }}>
            <FiInstagram size='30px' className='icon' />
          </motion.a >
        </div>
        <div className='wrapper-other'>
          <p className='copy-text'>2022 Damian D, All Rights Reserved.<FaRegCopyright className='icon-copy' /></p>
        </div>
      </div>
  )
}

export default Footer