import FormularioContact from '../../components/FormularioContact'
import { motion } from 'framer-motion'
import MyPerfil from '../../components/MyPerfil'
import Foto from '../../assets/fotoBN.jpg'
import pdf from '../../assets/CV-JesusDamianFront.pdf'
import './Contact.scss'

const nameWeb = () => <p className='txt-web'>Desarrollador Web</p>
const photo = () => <img className='image' src={Foto} alt='' />
const myName = () => <p className='my-name'>Damián Dávalos</p>
const txtInfo = () => <motion.p className='txt-inf' whileHover={{ scale: 1.1, fontWeight: 'bold' }}>
    Este es un poco de mi trabajo como <br/> Front-end. Si quieres conocer algo mas,
    de lado derecho puedes dejarme un correo,<br/>lo respondere cuando me sea posible
    o abajo puede encontrar mis redes sociales.<br/>Gracias por tu visita! 
</motion.p>
const btnCv = () => {
  return(
    <motion.button 
    className='cv-btn'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    >
      <a href={pdf} target='_blank' rel='noreferrer' download='CVDamian.pdf'>DescargarCV</a>
    </motion.button>
  )
}


const Contact = () => {
  return (

     <motion.div 
      className='contact-wrapper'
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <MyPerfil 
        name={nameWeb()}
        img={photo()} 
        myname={myName()}
        txt={txtInfo()}
        btnCV={btnCv()} />

        <div className='wrapper-contact'>
          <FormularioContact />
          <div className='other-options'></div>
        </div>
      </motion.div>
    
  )
}

export default Contact