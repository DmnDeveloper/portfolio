import React from 'react'
import { motion } from 'framer-motion'
import './TecnoProps.scss'

function TecnoProps(props) {
  return (
    <div className='column-container'>
        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 3240, scale: [0.1 , 1.2,  1.0] }}
            transition={{  duration: 2 }}>{props.iconone}</motion.div>
            <div className='inf-level'>{props.levelone}</div>
          </div> 
          <motion.div 
          className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txtone}</motion.div>
        </div>

        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 3240, scale: [0.1 ,1.2, 1.0]  }}
            transition={{  duration: 2 }}>{props.icontwo}</motion.div>
            <div className='inf-level'>{props.leveltwo}</div>
          </div> 
          <motion.div className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txttwo}</motion.div>
        </div>

        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 3240, scale: [0.1 , 1.2, 1.0] }}
            transition={{  duration: 2 }}>{props.iconthree}</motion.div>
            <div className='inf-level'>{props.levelthree}</div>
          </div>
          <motion.div className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txtthree}</motion.div>
        </div>

        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 3240, scale: [0.1 , 1.2, 1.0] }}
            transition={{  duration: 2 }}>{props.iconfour}</motion.div>
            <div className='inf-level'>{props.levelfour}</div>
          </div>
          <motion.div className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txtfour}</motion.div> 
        </div>

        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 5040, scale: [0.1 , 1.2, 1.0] }}
            transition={{  duration: 2 }}>{props.iconfive}</motion.div>
            <div className='inf-level'>{props.levelfive}</div>
          </div>
          <motion.div className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txtfive}</motion.div>
        </div>

        <div className='row'>
          <div className='logo-porcent'>
            <motion.div 
            className='wrapper-rotate'
            animate={{ rotate: 3240, scale: [0.1 , 1.2, 1] }}
            transition={{  duration: 2 }}>{props.iconsix}</motion.div>
            <div className='inf-level'>{props.levelsix}</div>
          </div>
          <motion.div className='txt-level'
          animate={{ scale: [-0, 0, 1] }}
          transition={{ duration: 2 }}>{props.txtsix}</motion.div> 
        </div>
    </div>
  )
}

export default TecnoProps