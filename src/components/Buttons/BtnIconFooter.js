import React from 'react';
import { motion } from 'framer-motion';
import './Buttons.scss';

const BtnIconFooter = (props) => {
  return(
    <motion.button whileHover={{ rotate: [360, -360] }}
    whileTap={{ scale: 0.8 }} className='btn-footer' onClick={props.myClick} type='submit'>{props.icon}</motion.button>
  )
}

export default BtnIconFooter