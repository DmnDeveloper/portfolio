import React from 'react'
import { motion } from 'framer-motion'
import login from '../../assets/cloeLogin.png'
import home from '../../assets/cloeF.png'
import cloe from '../../assets/cloeC.png'
import './ModalStyle.scss'

const ModalCloe = () => {
  return (
    <>
    <p className='txt-one'>Esta app consta de un logeo inicial realizado con Formik y Yup para su manejo y validacion de datos. Generando un token con JSONWEBTOKEN que permite el logeo</p>
    <div className='img-one'><img src={login} alt=''/></div>
    <p className='txt-two'>Una vez generado el token de manera correcta, podremos encontrar todos los beneficios ofrecidos por CLOE a sus socios y trabajadores. </p>
    <div className='img-two'><img  src={home} alt=''/></div>
    <p className='txt-two'>El codigo desplegado para la vizualizacion solo es una muestra, no contiene ni el login ni codigo responsivo </p>
    <div className='img-two'><img src={cloe} alt='' /></div>
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
        ><a href='https://jade-chebakia-e8d428.netlify.app/' target='_blank' rel='noreferrer'>Visualizar</a></motion.button>
    </div>
    </>
  )
}

export default ModalCloe