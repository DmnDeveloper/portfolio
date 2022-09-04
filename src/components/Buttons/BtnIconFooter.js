import React from 'react';
import { motion } from 'framer-motion';
import './Buttons.scss';

const BtnIconFooter = (props) => {
  return(
    <a href={props.link} rel='noreferrer' target='_blank'>   
      <motion.button className='btn-footer' 
      whileHover={{ rotate: [360, -360] }}
      whileTap={{ scale: 0.8 }} 
      onClick={props.myClick} type='submit'
      >{props.icon}</motion.button>
    </a> 
  )
}

export default BtnIconFooter