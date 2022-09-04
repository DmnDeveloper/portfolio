import React from 'react'
import { motion } from 'framer-motion'
import './TecnoProps.scss'

export function LevelDesign (props) {
  return(
    <motion.div className='level' animate={props.porcentaje} initial={props.initial} transition={{ duration: 2 }}>
      <motion.p className='name' animate={{ scaleX: [0, 0, 1] }}>{props.name}</motion.p>
    </motion.div>
  )
}

export const IconDesign = (props) => {
  return(
  <div className='row'> 
    <div className='logo-porcent'>
        <motion.div 
        className='wrapper-rotate'
        animate={{ rotate: 2520 ,rotateY: 2520, rotateX: 2520, scale: [0.1 ,1.2, 1] }}
        transition={{  duration: 2 }}
        >{props.icon}</motion.div>
        <div className='inf-level'>{props.level}</div>
    </div>
     <motion.div 
     className='txt-level'
     animate={{ scale: [-0, 0, 1] }}
     transition={{ duration: 2 }}
     >
      {props.txt}</motion.div>
  </div>
  )
}


function TecnoProps(props) {
  return (
    <div className='column-container'>
         <IconDesign 
         icon={props.iconone} 
         level={props.levelone} 
         txt={props.txtone}
         />
        <IconDesign 
        icon={props.icontwo} 
        level={props.leveltwo} 
        txt={props.txttwo}
        />
        <IconDesign 
        icon={props.iconthree} 
        level={props.levelthree} 
        txt={props.txtthree}
        />
        <IconDesign 
        icon={props.iconfour} 
        level={props.levelfour} 
        txt={props.txtfour}
        />  
        <IconDesign 
        icon={props.iconfive} 
        level={props.levelfive} 
        txt={props.txtfive}
        />  
        <IconDesign 
        icon={props.iconsix} 
        level={props.levelsix} 
        txt={props.txtsix}
        /> 
    </div>
  )
}

export default TecnoProps