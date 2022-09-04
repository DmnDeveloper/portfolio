import MyPerfil from '../../components/MyPerfil'

import { motion } from 'framer-motion'
import TableOne from '../../components/Tecno/TableOne'
import TableTwo from '../../components/Tecno/TableTwo' 
import {BtnContacto, BtnCv} from '../../components/Buttons/BtnsPerfil'
import './Home.scss'
//elementos de 'MyPerfil'
const nameWeb = () => <p className='txt-web'>Front-end</p>
const myName = () => <p className='my-name'>Damian Davalos</p>
const txtInfo = () => <motion.p className='txt-inf' whileHover={{ scale: 1.1 }}>
    Mi nombre es Jesús Damián Matín Dávalos<br />estas son algunas de las tecnologias<br /> que he utilizado y
    aprendido en mas<br/> de dos años como desarrollador frontEnd.<br/> Gracias por tu visita.</motion.p>
/*const btnCv = () => {
  return(
    <motion.button className='cv-btn'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    > <a  href={pdf} target='_blank' rel='noreferrer' download='CVDamian.pdf'>DescargarCV</a>
    </motion.button>
  ) 
}
const btnConta = () => {
  return(
    <motion.button className='con-btn'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    > <Link className='link' exact='true' to='/Contact'>Contactarme</Link>
    </motion.button>
  )
}*/


const Home = () => {
  return (
  <motion.div 
  className='home-wrapper'
  initial={{width: 0}}
  animate={{width: '100%'}}
  exit={{x: window.innerWidth, transition: { duration: 0.1 } }}
  >
      <MyPerfil
        name={nameWeb()}
        myname={myName()}
        txt={txtInfo()}
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