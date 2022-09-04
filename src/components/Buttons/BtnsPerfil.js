import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import pdf from '../../assets/CV-JesusDamianFront.pdf'
import './Buttons.scss'

export function BtnContacto () {
  return(
      <Link exact='true' to='/Contact'>
          <motion.button className='btn-contacto'
          whileHover={{ scale: 1.1 }} 
          whileTap={{ scale: 0.8 }}>Contactarme</motion.button>
      </Link>
  )
}

export function BtnCv() {
  return(
      <a 
      href={pdf} 
      target='_blank' 
      rel='noreferrer' 
      download='CVDamian.pdf'>
          <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }} className='btn-cv'>DescargarCV</motion.button>
      </a>
  )
}