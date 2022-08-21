import MyPerfil from '../../components/MyPerfil'
import Foto from '../../assets/fotoBN.jpg'
import { Link } from 'react-router-dom'
import pdf from '../../assets/CV-JesusDamianFront.pdf'
import { motion } from 'framer-motion'
import './Home.scss'
//importaciones de icons
import TableOne from '../../components/Tecno/TableOne'
import TableTwo from '../../components/Tecno/TableTwo' 

//elementos de 'MyPerfil'
const nameWeb = () => <p className='txt-web'>Front-end</p>
const photo = () => <img className='image' src={Foto} alt='' />
const myName = () => <p className='my-name'>Damian Davalos</p>
const txtInfo = () => <motion.p className='txt-inf' whileHover={{ scale: 1.1 }}>
    Mi nombre es Jesús Damián Matín Dávalos<br />estas son algunas de las tecnologias<br /> que he utilizado y
    aprendido en mas<br/> de dos años como desarrollador frontEnd.<br/> Gracias por tu visita.</motion.p>
const btnCv = () => {
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
}


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
        img={photo()} 
        myname={myName()}
        txt={txtInfo()}
        btnCV={btnCv()}
        btnContact={btnConta()}
      />
      <div className='wrapper-about'>
        <TableOne />
        <TableTwo />
        
      </div>
  </motion.div>
  )
}

export default Home