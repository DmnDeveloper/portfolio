import React from 'react';
import { motion } from 'framer-motion'
import './Buttons.scss'

export const BtnCode = (props) => {
  return(
    <motion.a 
    href={props.link} 
    target='_blank' 
    rel='noreferrer' 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}>
      <button className='btn-code'>Ver Codigo</button>
    </motion.a>
  )
}

export const BtnView = (props) => {
  return(
    <motion.a 
    href={props.link} 
    target='_blank' 
    rel='noreferrer' 
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}>
      <button className='btn-view'>Vizualizar</button>
    </motion.a>
  )
}