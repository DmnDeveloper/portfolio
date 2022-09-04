import React from 'react'
import { FaHtml5, FaGitAlt } from 'react-icons/fa'
import { TiCss3 } from 'react-icons/ti'
import { IoLogoJavascript } from 'react-icons/io'
import { DiSass, DiResponsive } from 'react-icons/di'
import TecnoProps, { LevelDesign } from './TecnoProps'
import './TecnoProps.scss'


const TableOne = () => {
  return (
    <>
        <TecnoProps 
// HTML 5:
        iconone={<FaHtml5 size='50px' color='#e34c26'/>}
        levelone={<LevelDesign porcentaje={ { width: ['0%', '100%', '90%'] } } initial={ {backgroundColor: '#e34c26'} } name={'HTML 5'} /> }
        txtone={<p className='text'>90%</p>}
// CSS 3:
        icontwo={<TiCss3 size='50px' color='#264de4'/>}
        leveltwo={<LevelDesign porcentaje={ { width: ['0%', '100%', '90%'] } } initial={ {backgroundColor: '#264de4'} } name={'CSS 3'} />}
        txttwo={<p className='text'>90%</p>}
// JAVASCRIPT:
        iconthree={<IoLogoJavascript size='50px' color='#F0DB4F'/>}
        levelthree={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#F0DB4F'} } name={'JAVASCRIPT'} />}
        txtthree={<p className='text'>75%</p>}
// SASS:
        iconfour={<DiSass size='50px' color='#cd6799'/>}
        levelfour={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#cd6799'} } name={'SASS'} />}
        txtfour={<p className='text'>75%</p>}
// GIT:
        iconfive={<FaGitAlt size='50px' color='#F1502F'/>}
        levelfive={<LevelDesign porcentaje={ { width: ['0%', '100%', '70%'] } } initial={ {backgroundColor: '#F1502F'} } name={'GIT'} />}
        txtfive={<p className='text'>70%</p>}
// RESPONSIVE WEB DESIGN:
        iconsix={<DiResponsive size='50px' color='#264de4'/>}
        levelsix={<LevelDesign porcentaje={ { width: ['0%', '100%', '65%'] } } initial={ {backgroundColor: '#264de4'} } name={'RESPONSIVE'} />}
        txtsix={<p className='text'>65%</p>} />
    </>
  )
}

export default TableOne