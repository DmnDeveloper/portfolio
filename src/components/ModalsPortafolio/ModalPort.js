import React from 'react'
import{ motion } from 'framer-motion'
import imgone from '../../assets/412.png'
import imgtwo from '../../assets/1024ipod.png'
import './ModalStyle.scss'

const ModalPort = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><img src={imgone} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><img  src={imgtwo} alt=''/></div>
    <div className='container-btns'>
        <motion.button 
        className='wrapper-btn-code'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        ><a href='https://github.com/DmnDeveloper/cloeoe' target='_blank' rel='noreferrer'>Codigo</a></motion.button>
        <motion.button 
        className='wrapper-btn-app'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        ><a href='https://github.com/DmnDeveloper/cloeoe' target='_blank' rel='noreferrer'>Visualizar</a></motion.button>
    </div>
    </>
  )
}

export default ModalPort