import MyPerfil from '../../components/MyPerfil'
import { motion } from 'framer-motion'
import './Portafolio.scss'
import Modals from '../../components/ModalsPortafolio/Modals'
import BtnContacto from '../../components/Buttons/BtnContacto'
import BtnCv from '../../components/Buttons/BtnCv'

const nameWeb = () => <p className='txt-web'>Portafolio</p>
const myName = () => <p className='my-name'>Damian Davalos</p>
const txtInfo = () => <motion.p className='txt-inf' whileHover={{ scale: 1.1 }}>
    Estos son algunos de los proyectos en <br /> los que he podido participar con el front end.<br /> Tanto proyectos personales como a clientes<br /> es un poco de lo trabajado.
</motion.p>


const Portafolio = () => {
  return (
    <motion.div 
    className='portafolio-wrapper'
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
      <div className='wrapper-projects'>
        <Modals />
      </div>
    </motion.div>
  )
}

export default Portafolio