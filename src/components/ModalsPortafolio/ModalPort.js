import React from 'react'
import{ motion } from 'framer-motion'
import imgone from '../../assets/412.png'
import imgtwo from '../../assets/1024ipod.png'
import './ModalStyle.scss'
import { BtnCode } from '../Buttons/BtnsModal'

const ModalPort = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><motion.img whileTap={{ scale: 1.5 }} src={imgone} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><motion.img whileTap={{ scale: 1.5 }} src={imgtwo} alt=''/></div>
    <div className='container-btns'>
         <BtnCode
         link={'https://github.com/DmnDeveloper/portfolio'} />
    </div>
    </>
  )
}

export default ModalPort