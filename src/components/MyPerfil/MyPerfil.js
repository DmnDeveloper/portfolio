import React from 'react'
import { motion } from 'framer-motion'
import Foto from '../../assets/fotoBN.jpg'
import './MyPerfil.scss'

const MyPerfil = (props) => {
  return (
    <div className='wrapper-perfil'>
        <div className='wrapper-name-foto'>
          <p className='txt-web'>{ props.name }</p>
          <div className='img-wrapper'>
            <img className='image' src={Foto} alt='' />
          </div>
          <div className='name-wrapper'>
          <p className='my-name'>{props.myname}</p>
          </div>
        </div> 
        
        <div className='text-wrapper'>
          <motion.p className='txt-inf'
          whileHover={{ scale: 1.1 }}
          >{props.txt}</motion.p>
        </div>

        <div className='btns-wrapper'>
        {props.btnCV}
        {props.btnContact}
        </div>
    </div>
  )
}

export default MyPerfil