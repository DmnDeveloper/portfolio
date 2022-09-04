import FormularioContact from '../../components/FormularioContact'
import { motion } from 'framer-motion'
import MyPerfil from '../../components/MyPerfil'
import { BtnCv } from '../../components/Buttons/BtnsPerfil'
import './Contact.scss'



const Contact = () => {
  return (
     <motion.div 
      className='contact-wrapper'
      initial={{width: 0}}
      animate={{width: '100%'}}
      exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
      >
        <MyPerfil 
        name={'Desarrollador Web'}
        myname={'Damián Dávalos'}
        txt={'Este es un poco de mi trabajo como Front-end. Si quieres conocer algo mas,de lado derecho puedes dejarme un correo, lo respondere cuando me sea posible o abajo puede encontrar mis redes sociales. Gracias por tu visita!'}
        btnCV={<BtnCv />} />

        <div className='wrapper-contact'>
          <FormularioContact />
          <div className='other-options'></div>
        </div>
      </motion.div>
    
  )
}

export default Contact