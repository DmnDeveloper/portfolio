import React from 'react'
import { FaReact } from 'react-icons/fa'
import { SiSemanticuireact, SiReactrouter, SiStyledcomponents } from 'react-icons/si'
import { DiNodejsSmall }from 'react-icons/di'
import { Md3DRotation } from 'react-icons/md'
import TecnoProps, { LevelDesign } from './TecnoProps'
import './TecnoProps.scss'



const TableTwo = () => {
  return (
    <>
    <TecnoProps 
// REACT:
        iconone={<FaReact size='50px' color='#61DBFB' />}
        levelone={<LevelDesign porcentaje={ { width: ['0%', '100%', '75%'] } } initial={ {backgroundColor: '#61DBFB'} } name={'REACT JS'} />}
        txtone={<p className='text'>%75</p>}
// SEMANTIC UI:
        icontwo={<SiSemanticuireact size='50px' color='#29B6F6'/>}
        leveltwo={<LevelDesign porcentaje={ { width: ['0%', '100%', '60%'] } } initial={ {backgroundColor: '#29B6F6'} } name={'SEMANTIC UI'} />}
        txttwo={<p className='text'>%50</p>}
// STYLED COMPONENTS:
        iconthree={<SiStyledcomponents size='50px' color='#cd6799'/>}
        levelthree={<LevelDesign porcentaje={ { width: ['0%', '100%', '80%'] } } initial={ {backgroundColor: '#cd6799'} } name={'S. COMPONENTS'} />}
        txtthree={<p className='text'>%80</p>}
// REACT ROUTER DOM:
        iconfour={<SiReactrouter size='50px' color='#FF0000'/>}
        levelfour={<LevelDesign porcentaje={ { width: ['0%', '100%', '70%'] } } initial={ {backgroundColor: '#FF0000'} } name={'ROUTER DOM'} />}
        txtfour={<p className='text'>%70</p>}
// NODE JS: 
        iconfive={<DiNodejsSmall size='50px' color='#68A063'/>}
        levelfive={<LevelDesign porcentaje={ { width: ['0%', '100%', '50%'] } } initial={ {backgroundColor: '#68A063'} } name={'NODE JS'} />}
        txtfive={<p className='text'>%40</p>}
// FRAMER MOTION:
        iconsix={<Md3DRotation size='50px' color='#800080'/>}
        levelsix={<LevelDesign porcentaje={ { width: ['0%', '100%', '60%'] } } initial={ {backgroundColor: '#800080'} } name={'F. MOTION'} />}
        txtsix={<p className='text'>%50</p>}
    />  
    </>
  )
}

export default TableTwo