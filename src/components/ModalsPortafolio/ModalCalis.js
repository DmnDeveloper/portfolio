import { motion } from 'framer-motion'
import homecali from '../../assets/homeCal.png'
import imgnav from '../../assets/navbar.png'
import './ModalStyle.scss'

const ModalCalis = () => {
  return (
    <>
    <p className='txt-one'>Cuenta con diseño responsivo desde telefonos celular hasta laptops.</p>
    <div className='img-one'><img src={homecali} alt=''/></div>
    <p className='txt-two'>Algunas de las tecnologias utilizadas son: react,sass , react-router-dom, formik, yup, y emailJS para el formulario de contacto </p>
    <div className='img-two'><img  src={imgnav} alt=''/></div>
    <div className='container-btns'>
        <motion.button 
        className='wrapper-btn-code'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        > <a href='https://github.com/DmnDeveloper/calistenia-gdl-mexico' target='_blank' rel='noreferrer'>Codigo</a></motion.button>
        <motion.button 
        className='wrapper-btn-app'
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
        > <a href='https://dmndeveloper.github.io/calistenia-gdl-mexico/' target='_blank' rel='noreferrer'>Visualizar</a></motion.button>
    </div>
    </> 
  )
}

export default ModalCalis