import MyPerfil from '../../components/MyPerfil'
import Foto from '../../assets/fotoBN.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import pdf from '../../assets/CV-JesusDamianFront.pdf'
import './Portafolio.scss'
import Modals from '../../components/ModalsPortafolio/Modals'

const nameWeb = () => <p className='txt-web'>Portafolio</p>
const photo = () => <img className='image' src={Foto} alt='' />
const myName = () => <p className='my-name'>Damian Davalos</p>
const txtInfo = () => <motion.p className='txt-inf' whileHover={{ scale: 1.1 }}>
    Estos son algunos de los proyectos en <br /> los que he podido participar con el front end.<br /> Tanto proyectos personales como a clientes<br /> es un poco de lo trabajado.
</motion.p>
const btnCv = () => {
  return(
    <motion.button 
    className='cv-btn'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    >   <a href={pdf} target='_blank' rel='noreferrer' download='CVDamian.pdf'>DescargarCV</a>
    </motion.button>
  )
}
const btnConta = () => {
  return(
    <motion.button 
    className='con-btn'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.8 }}
    >   <Link className='link' exact='true' to='/Contact'>Contactarme</Link>
    </motion.button>
  )
}


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
        img={photo()} 
        myname={myName()}
        txt={txtInfo()}
        btnCV={btnCv()}
        btnContact={btnConta()}
          />
      <div className='wrapper-projects'>
        <Modals />
      </div>
    </motion.div>
  )
}

export default Portafolio