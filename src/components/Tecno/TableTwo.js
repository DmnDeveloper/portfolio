import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiSemanticuireact } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { SiReactrouter } from 'react-icons/si'
import { DiNodejsSmall }from 'react-icons/di'
import { Md3DRotation } from 'react-icons/md'
import TecnoProps from './TecnoProps'
import './TablesStyled.scss'
import { motion } from 'framer-motion'

const react = <FaReact size='50px' color='#61DBFB'/>
const levelReact = <motion.div className='level' initial={{ backgroundColor: '#61DBFB' }} animate={{ width: ['0%', '100%', '75%'], backgroundColor: '#61DBFB'}} transition={{ duration: 4 }} ><p className='name'>REACTJS</p></motion.div>
const txtReact = <p className='text'>%75</p>
const semantic = <SiSemanticuireact size='50px' color='#29B6F6'/>
const levelSemantic = <motion.div className='level' initial={{ backgroundColor: '#29B6F6' }} animate={{ width: ['0%', '100%', '50%'], backgroundColor: '#29B6F6' }} transition={{ duration: 4 }} ><p className='name'>SEMANTIC</p></motion.div>
const txtSemantic = <p className='text'>%50</p>
const styled = <SiStyledcomponents size='50px' color='#cd6799'/>
const levelStyled = <motion.div className='level' initial={{ backgroundColor: '#cd6799' }} animate={{ width: ['0%', '100%', '80%'], backgroundColor: '#cd6799' }} transition={{ duration: 4 }} ><p className='name'>STYLED COMP.</p></motion.div>
const txtStyled = <p className='text'>%80</p>
const router = <SiReactrouter size='50px' color='#FF0000'/>
const levelRouter = <motion.div className='level' initial={{ backgroundColor: '#FF0000' }} animate={{ width: ['0%', '100%', '70%'], backgroundColor: '#FF0000' }} transition={{ duration: 4 }} ><p className='name'>ROUTER DOM</p></motion.div>
const txtRouter = <p className='text'>%70</p>
const node = <DiNodejsSmall size='50px' color='#68A063'/>
const levelNode = <motion.div className='level' initial={{ backgroundColor: '#68A063' }} animate={{ width: ['0%', '100%', '40%'], backgroundColor: '#68A063' }} transition={{ duration: 4 }} ><p className='name'>NODEJS</p></motion.div>
const txtNode = <p className='text'>%40</p>
const motionicon = <Md3DRotation size='50px' color='#800080'/>
const levelMotion = <motion.div className='level' initial={{ backgroundColor: '#800080' }} animate={{ width: ['0%', '100%', '50%'], backgroundColor: '#800080' }} transition={{ duration: 4 }} ><p className='name'>F. MOTION</p></motion.div>
const txtMotion = <p className='text'>%50</p>


const TableTwo = () => {
  return (
    <>
    <TecnoProps 
        iconone={react}
        levelone={levelReact}
        txtone={txtReact}
        icontwo={semantic}
        leveltwo={levelSemantic}
        txttwo={txtSemantic}
        iconthree={styled}
        levelthree={levelStyled}
        txtthree={txtStyled}
        iconfour={router}
        levelfour={levelRouter}
        txtfour={txtRouter}
        iconfive={node}
        levelfive={levelNode}
        txtfive={txtNode}
        iconsix={motionicon}
        levelsix={levelMotion}
        txtsix={txtMotion}
         />  
    </>
  )
}

export default TableTwo