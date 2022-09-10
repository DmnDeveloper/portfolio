import React from 'react'
import { FaHtml5, FaGitAlt, FaReact } from 'react-icons/fa'
import { TiCss3 } from 'react-icons/ti'
import { IoLogoJavascript } from 'react-icons/io'
import { DiSass, DiResponsive, DiNodejsSmall } from 'react-icons/di'
import { SiSemanticuireact, SiReactrouter, SiStyledcomponents } from 'react-icons/si'
import { Md3DRotation } from 'react-icons/md'
import TecnoProps, { LevelDesign } from './TecnoProps'
import './TecnoProps.scss'

export const TableOne = () => {
  return (
    <>
        <TecnoProps 
// HTML 5:
        iconone={<FaHtml5 size='50px' color='#e34c26'/>}
        levelone={<LevelDesign porcentaje={ { width: ['0%', '100%', '90%'] } } initial={ {backgroundColor: '#e34c26'} } name={'HTML 5'} /> }
        txtone={'90%'}
// CSS 3:
        icontwo={<TiCss3 size='50px' color='#264de4'/>}
        leveltwo={<LevelDesign porcentaje={ { width: ['0%', '100%', '90%'] } } initial={ {backgroundColor: '#264de4'} } name={'CSS 3'} />}
        txttwo={'90%'}
// JAVASCRIPT:
        iconthree={<IoLogoJavascript size='50px' color='#F0DB4F'/>}
        levelthree={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#F0DB4F'} } name={'JAVASCRIPT'} />}
        txtthree={'75%'}
// SASS:
        iconfour={<DiSass size='50px' color='#cd6799'/>}
        levelfour={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#cd6799'} } name={'SASS'} />}
        txtfour={'75%'}
// GIT:
        iconfive={<FaGitAlt size='50px' color='#F1502F'/>}
        levelfive={<LevelDesign porcentaje={ { width: ['0%', '100%', '70%'] } } initial={ {backgroundColor: '#F1502F'} } name={'GIT'} />}
        txtfive={'70%'}
// RESPONSIVE WEB DESIGN:
        iconsix={<DiResponsive size='50px' color='#264de4'/>}
        levelsix={<LevelDesign porcentaje={ { width: ['0%', '100%', '65%'] } } initial={ {backgroundColor: '#264de4'} } name={'RESPONSIVE'} />}
        txtsix={'65%'} />
    </>
  )
}

export const TableTwo = () => {
  return (
    <>
    <TecnoProps 
// REACT:
        iconone={<FaReact size='50px' color='#61DBFB' />}
        levelone={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#61DBFB'} } name={'REACT JS'} />}
        txtone={'75%'}
// SEMANTIC UI:
        icontwo={<SiSemanticuireact size='50px' color='#29B6F6'/>}
        leveltwo={<LevelDesign porcentaje={ { width: ['0%', '100%', '60%'] } } initial={ {backgroundColor: '#29B6F6'} } name={'SEMANTIC UI'} />}
        txttwo={'50%'}
// STYLED COMPONENTS:
        iconthree={<SiStyledcomponents size='50px' color='#cd6799'/>}
        levelthree={<LevelDesign porcentaje={ { width: ['0%', '100%', '80%'] } } initial={ {backgroundColor: '#cd6799'} } name={'S. COMPONENTS'} />}
        txtthree={'80%'}
// REACT ROUTER DOM:
        iconfour={<SiReactrouter size='50px' color='#FF0000'/>}
        levelfour={<LevelDesign porcentaje={ { width: ['0%', '100%', '70%'] } } initial={ {backgroundColor: '#FF0000'} } name={'ROUTER DOM'} />}
        txtfour={'70%'}
// NODE JS: 
        iconfive={<DiNodejsSmall size='50px' color='#68A063'/>}
        levelfive={<LevelDesign porcentaje={ { width: ['0%', '100%', '50%'] } } initial={ {backgroundColor: '#68A063'} } name={'NODE JS'} />}
        txtfive={'40%'}
// FRAMER MOTION:
        iconsix={<Md3DRotation size='50px' color='#800080'/>}
        levelsix={<LevelDesign porcentaje={ { width: ['0%', '100%', '60%'] } } initial={ {backgroundColor: '#800080'} } name={'F. MOTION'} />}
        txtsix={'50%'}
    />  
    </>
  )
}