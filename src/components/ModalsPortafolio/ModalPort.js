import React from 'react'
import{ motion } from 'framer-motion'
import imgone from '../../assets/412.png'
import imgtwo from '../../assets/1024ipod.png'
import './ModalStyle.scss'

const ModalPort = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><motion.img whileTap={{ scale: 1.5 }} src={imgone} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><motion.img whileTap={{ scale: 1.5 }} src={imgtwo} alt=''/></div>
    <div className='container-btns'>
        <motion.button className='wrapper-btn-code' whileTap={{ scale: 0.8 }}
        ><motion.a 
        whileHover={{ scale: 1.1 }}
         href='https://github.com/DmnDeveloper/cloeoe' target='_blank' rel='noreferrer'>Codigo</motion.a></motion.button>
    </div>
    </>
  )
}

export default ModalPort