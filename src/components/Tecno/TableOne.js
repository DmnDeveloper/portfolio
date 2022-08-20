import React from 'react'
import { FaHtml5 } from 'react-icons/fa'
import { TiCss3 } from 'react-icons/ti'
import { IoLogoJavascript } from 'react-icons/io'
import { DiSass } from 'react-icons/di'
import { FaGitAlt } from 'react-icons/fa'
import { DiResponsive }from 'react-icons/di'
import TecnoProps from './TecnoProps'
import './TablesStyled.scss'
import { motion } from 'framer-motion'

const html = <FaHtml5 size='50px' color='#e34c26'/>
const levelHtml = <motion.div className='level'  initial={{ backgroundColor: '#e34c26' }} animate={{ width: ['0%', '100%', '90%'], backgroundColor: '#e34c26' }} transition={{ duration: 2 }} ><p className='name'>HTML5</p></motion.div>
const txtHtml = <p className='text'>90%</p>
const css = <TiCss3 size='50px' color='#264de4'/>
const levelCss = <motion.div className='level' initial={{ backgroundColor: '#264de4' }} animate={{ width: ['0%', '100%', '90%'], backgroundColor: '#264de4' }} transition={{ duration: 2 }} ><p className='name'>CSS3</p></motion.div>
const txtCss = <p className='text'>90%</p>
const js = <IoLogoJavascript size='50px' color='#F0DB4F'/>
const levelJs = <motion.div className='level' initial={{ backgroundColor: '#F0DB4F' }} animate={{ width: ['0%', '100%', '75%'], backgroundColor: '#F0DB4F',  }} transition={{ duration: 2 }} ><p className='name'>JAVASCRIPT</p></motion.div>
const txtJs = <p className='text'>75%</p>
const sass = <DiSass size='50px' color='#cd6799'/>
const levelSass = <motion.div className='level' initial={{ backgroundColor: '#cd6799' }} animate={{ width: ['0%', '100%', '75%'], backgroundColor: '#cd6799' }} transition={{ duration: 2 }} ><p className='name'>SASS</p></motion.div>
const txtSass = <p className='text'>75%</p>
const git = <FaGitAlt size='50px' color='#F1502F'/>
const levelGit = <motion.div className='level' initial={{ backgroundColor: '#F1502F' }} animate={{ width: ['0%', '100%', '70%'], backgroundColor: '#F1502F' }} transition={{ duration: 2 }} ><p className='name'>GIT</p></motion.div>
const txtGit = <p className='text'>70%</p>
const responsive = <DiResponsive size='50px' color='#264de4'/>
const levelResponsive = <motion.div className='level' initial={{ backgroundColor: '#264de4' }} animate={{ width: ['0%', '100%', '65%'], backgroundColor: '#264de4' }} transition={{ duration: 2 }} ><p className='name'>RESPONSIVE</p></motion.div>
const txtResponsive = <p className='text'>65%</p>


const TableOne = () => {
  return (
    <>
        <TecnoProps 
        iconone={html}
        levelone={levelHtml}
        txtone={txtHtml}
        icontwo={css}
        leveltwo={levelCss}
        txttwo={txtCss}
        iconthree={js}
        levelthree={levelJs}
        txtthree={txtJs}
        iconfour={sass}
        levelfour={levelSass}
        txtfour={txtSass}
        iconfive={git}
        levelfive={levelGit}
        txtfive={txtGit}
        iconsix={responsive}
        levelsix={levelResponsive}
        txtsix={txtResponsive} />
    </>
  )
}

export default TableOne