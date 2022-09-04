import React from 'react'
import MyPerfil from '../../components/MyPerfil'
import { motion } from 'framer-motion'
import Modals from '../../components/ModalsPortafolio/Modals'
import {BtnContacto, BtnCv} from '../../components/Buttons/BtnsPerfil'
import './Portafolio.scss'

const Portafolio = () => {
  return (
    <motion.div className='portafolio-wrapper'
    initial={{width: 0}}animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <MyPerfil
        name={'Portafolio'}
        myname={'Damian Davalos'}
        txt={'Estos son algunos de los proyectos en los que he podido participar con el front end. Tanto proyectos personales como a clientes es un poco de lo trabajado.'}
        btnCV={<BtnCv />}
        btnContact={<BtnContacto />}
          />
      <div className='wrapper-projects'>
        <Modals />
      </div>
    </motion.div>
  )
}

export default Portafolio