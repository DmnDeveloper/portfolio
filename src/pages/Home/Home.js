import React from 'react'
import MyPerfil from '../../components/MyPerfil'
import { motion } from 'framer-motion'
import { TableOne, TableTwo } from '../../components/Tecno/Tables'
import {BtnContacto, BtnCv} from '../../components/Buttons/BtnsPerfil'
import './Home.scss'

const Home = () => {
  return (
  <motion.div 
  className='home-wrapper'
  initial={{width: 0}}
  animate={{width: '100%'}}
  exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
  >
      <MyPerfil
        name={'Front-end'}
        myname={'Damian Davalos'}
        txt={'Mi nombre es Jesús Damián Matín Dávalos estas son algunas de las tecnologias que he utilizado y aprendido en mas de dos años como desarrollador frontEnd. Gracias por tu visita.'}
        btnCV={<BtnCv />}
        btnContact={<BtnContacto />}
      />
      <div className='wrapper-about'>
        <TableOne />
        <TableTwo />
      </div>
  </motion.div>
  )
}

export default Home